import { useEffect, useState } from "react";
import styles from "../assets/styles/Shorter.module.css";
import ClipboardJS from "clipboard";

export default function Shorter() {
  const [links, setLinks] = useState([]);
  const [url, setUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const api = `https://api.shrtco.de/v2/shorten?url=${url}`;

    try {
      const response = await fetch(api);
      const data = await response.json();

      if (!data.ok) {
        alert(data.error);
      } else {
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
      button.innerText = "Copied!";
      button.style.backgroundColor = "var(--darkViolet)";
      e.clearSelection();
    });
  };

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
    <div className={styles.shorter}>
      <form
        className={styles.form}
        type="url"
        value={url}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Shorten a link here..."
          className={styles.input}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className={styles.button}>Shorten It!</button>
      </form>
      <ul className={styles.linksList}>
        {links.map((link) => (
          <li key={link.result.code} className={styles.link}>
            <a href={link.result.original_link} target="_blank">
              <span className={styles.originalLink}>
                {link.result.original_link}
              </span>
            </a>
            <div>
              <a href={link.result.full_short_link} target="_blank">
                <span className={styles.shortLink}>
                  {link.result.full_short_link}
                </span>
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
