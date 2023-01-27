import { useEffect, useState } from "react";
import ClipboardJS from "clipboard";

export default function Shorter() {
  const [links, setLinks] = useState([]);
  const [url, setUrl] = useState("");
  const [lastBtn, setLastBtn] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const api = `https://api.shrtco.de/v2/shorten?url=${url}`;

    try {
      const response = await fetch(api);
      const data = await response.json();

      const input = document.getElementById("ogLink");
      input.value = "";
      if (!data.ok) {
        input.placeholder = data.error;
        input.classList.add("invalid");
        alert(data.error);
      } else {
        input.classList.remove("invalid");
        saveLinks(data);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCopy = (url, button) => {
    const clipboard = new ClipboardJS(".copyButton", {
      text: function () {
        return url;
      },
    });

    clipboard.on("success", function (e) {
      if (lastBtn) {
        lastBtn.innerText = "Copy";
        lastBtn.style.backgroundColor = "";
      }
      button.innerText = "Copied!";
      button.style.backgroundColor = "var(--darkViolet)";
      setLastBtn(button);
      e.clearSelection();
    });
  };

  function handleChange(input) {
    input.classList.remove("invalid");
    setUrl(input.value);
  }

  function saveLinks(data) {
    setLinks([data, ...links]);
    const MAX_LINKS = 10;
    let currentData = JSON.parse(localStorage.getItem("links")) || [];
    currentData.unshift(data);
    if (currentData.length > MAX_LINKS) {
      currentData.pop();
    }
    localStorage.setItem("links", JSON.stringify(currentData));
  }

  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem("links"));
    if (savedLinks) {
      setLinks(savedLinks);
    }
  }, []);

  return (
    <div className="shorter">
      <form type="url" value={url} onSubmit={handleSubmit}>
        <input
          type="text"
          name="link"
          id="ogLink"
          placeholder="Shorten a link here..."
          onChange={(e) => handleChange(e.target)}
          required
        />
        <button className="button">Shorten It!</button>
      </form>
      <ul className="linksList">
        {links.map((link) => (
          <li key={link.result.code} className="link">
            <a href={link.result.original_link} target="_blank">
              <span className="originalLink">{link.result.original_link}</span>
            </a>
            <hr />
            <div>
              <a href={link.result.full_short_link} target="_blank">
                <span className="shortLink">{link.result.full_short_link}</span>
              </a>
              <button
                onClick={(btn) =>
                  handleCopy(link.result.full_short_link, btn.target)
                }
                className="copyButton"
              >
                Copy
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
