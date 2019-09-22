# identity-demo
Aggregation of the DeepKey and IdentityManager hApps to demo 

## Overview

## Run the demo

### Requirements

- Have `nix-shell` installed. Follow this Holochain [quickstart guide](https://developer.holochain.org/start.html) to install it on your local machine.

### Steps

All these steps are to be done in a terminal application (Ubuntu and MacOS tested).

1. Run `nix-shell` inside this folder.
2. Verify that `hc --version` returns `hc 0.0.30-alpha2`.
3. Go inside `./identity-manager/`.
4. Run `npm run hc:start`.
4. **In another terminal**: go inside `./identity-manager/ui-src/` and run `npm install` to install UI dependencies.
5. Run `npm run ui:start:agent1` in that same terminal.
6. Go to `localhost:4001`.

Tada!