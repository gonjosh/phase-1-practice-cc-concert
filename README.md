# BrandonFest

![](./final.png)

> To view in VSCode, right click on the README.md file and select "Open Preview".

## Setup

Run this command to get the backend started:

```console
$ json-server --watch db.json
```

Test your server by visiting this route in the browser:

[http://localhost:3000/bands](http://localhost:3000/bands)

Then, open the `index.html` file on your browser to run the application.

Write your code in the `index.js` file. The base URL for your API will be
[http://localhost:3000](http://localhost:3000).

## Core Deliverables

As a user, I can:

1. See the first bands's details when the page loads. The number of
   seats at the show for the band can be calculated by subtracting the
   `reserved` from `capacity`.

2. See all bands playing  menu of all movies on the left side of the page in the `#band-list`
   element when the page loads.

3. Reserve a seat for a show. After clicking the "Reserve" button, I should
   see the number of available tickets decrease. I should not
   be able to buy a ticket if the showing only has 0 spots available). **No persistence is needed for this feature**.