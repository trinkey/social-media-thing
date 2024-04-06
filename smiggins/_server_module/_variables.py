from ._packages import hashlib
from ._api_keys import *

# Headers set at the top of every html file.
HTML_HEADERS: str = """
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="/static/css/base.css">
<link rel="icon" href="/static/img/favicon.ico" type="image/x-icon">
<script src="https://cdn.jsdelivr.net/npm/linkifyjs@4.1.3/dist/linkify.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/linkify-html@4.1.3/dist/linkify-html.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/linkify-plugin-mention@4.1.3/dist/linkify-plugin-mention.min.js"></script>
<script src="/static/js/base.js"></script>
"""

# Headers set at the bottom of some html files.
HTML_FOOTERS: str = """
<script src="/static/js/base_footer.js"></script>
"""

# Used when hashing user tokens
PRIVATE_AUTHENTICATOR_KEY: str = hashlib.sha256(auth_key).hexdigest()

# Using nested dicts because indexing a dict is generally faster than
# for a list.
timeout_handler: dict[str, dict[str, None]] = {}