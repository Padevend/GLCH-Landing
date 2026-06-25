export function share(props) {
  const { title, text, url } = props;

  if (navigator.share) {
    navigator
      .share({
        title,
        text,
        url,
      })
      .then(() => {
        console.log("Article partagé avec succès");
      })
      .catch((error) => {
        console.error("Erreur lors du partage :", error);
      });
  } else {
    alert("Le partage n'est pas supporté par votre navigateur.");
  }
}

export function shortText(text, maxLength = 120) {
  if (!text) return "";
  const plainText = text.replace(/<[^>]*>?/gm, "");
  return plainText.length > maxLength
    ? plainText.substring(0, maxLength) + "..."
    : plainText;
}
