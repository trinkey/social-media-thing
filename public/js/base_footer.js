x = document.createElement("div");
x.setAttribute("class", "icons");
x.setAttribute("id", "icons");

document.querySelector("body").setAttribute("data-color", validColors.indexOf(localStorage.getItem("color")) == -1 ? validColors[0] : localStorage.getItem("color"));

if (typeof(logged_in) !== 'boolean' || logged_in) {
  x.innerHTML = icons.settings;

  if (typeof(home) !== 'undefined') {
    x.innerHTML += icons.home;
  }

  x.innerHTML += `<div id="message-icon">${icons.message}</div><div id="notification-icon">${icons.notification}</div>`;
}

if (typeof(share) !== 'undefined') {
  x.innerHTML += `<span title="Share" onclick="window.navigator.clipboard.writeText('${escapeHTML(share)}'); showlog('Copied to clipboard!');">${icons.share}</span>`;
}

document.body.append(x);

if (typeof(profile) === "undefined") {
  if (localStorage.getItem("username") === null) {
    fetch("/api/info/username")
      .then((response) => (response.text()))
      .then((username) => {
        if (usernameRegexFull.test(username)) {
          localStorage.setItem("username", username);
          dom("icons").innerHTML += `<a title="Profile" href="/u/${username}">${icons.user}</a>`;
        } else {
          console.log("Username returned from /api/info/username is invalid.");
        }
      });
  } else {
    if (usernameRegexFull.test(localStorage.getItem("username"))) {
      dom("icons").innerHTML += `<a title="Profile" href="/u/${localStorage.getItem("username")}">${icons.user}</a>`;
    } else {
      console.log("Username in localStorage is invalid.");
      localStorage.removeItem("username");
    }
  }
}

hasNotification = true;
hasMessage = true;

if (typeof(hasNotification) !== "undefined" && hasNotification) { dom("notification-icon").classList.add("unread-dot"); }
if (typeof(hasMessage) !== "undefined" && hasMessage) { dom("message-icon").classList.add("unread-dot"); }
