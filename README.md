# identity-demo

Aggregation of the IdentityManager, Peer-Chat and DeepKey hApps to demo during the Barcelona meetup.

## Overview

This is a demo for the hApps IdentityManager (aka Personas), Peer-Chat and DeepKey, which are being developed by Holo. These are their repositories:

- [IdentityManager](https://github.com/holochain/identity-manager)
- [Peer-Chat](https://github.com/holochain/peer-chat)
- [DeepKey](https://github.com/Holo-Host/DeepKey)

<!--- This is their internal module structure:
// TODO: create internal module structure -->

Documentation:
- [Personas & Profiles](https://hackmd.io/pcDkiCJoQH-z6s_VS4LNRg)

Video:
- [hAppy Developer Demo of Identity Manager and Chat](https://www.youtube.com/watch?v=9M8iscRoOR4)

## Requirements

- Have `nix-shell` installed. Follow this Holochain [quickstart guide](https://developer.holochain.org/start.html) to install it on your local machine.

## Run the IdentityManager demo

### Steps

All these steps are to be done in a terminal application (Ubuntu and MacOS tested).

1. Run `nix-shell` inside this folder.
2. Verify that `hc --version` returns `hc 0.0.30-alpha2`.
3. Go inside `./identity-manager/`.
4. Run `npm run hc:start1`.
<!--- 5. OPTIONAL: Run `npm run hc:start2` in a new terminal, to start another agents. -->

In another terminal:

5. Go inside `./identity-manager/ui-src/` and run `npm install` to install UI dependencies.
6. Run `npm run ui:start:agent1` in that same terminal.
7. Go to `localhost:4001`.
<!--- 8. OPTIONAL: Run `npm run ui:start:agent2` in a new terminal to start a second client.
9. OPTIONAL: Go to `localhost:4002`.-->

Tada!

## Run the Peer-Chat demo

### Steps

All these steps are to be done in a terminal application (Ubuntu and MacOS tested).

1. Run `nix-shell` inside this folder.
2. Verify that `hc --version` returns `hc 0.0.30-alpha2`.
3. Go inside `./peer-chat/`.
4. Run `npm run hc:start:agent1`.
<!--- 5. OPTIONAL: Run `npm run hc:start:agent2` in a new terminal to start a second agent. -->

In another terminal:

5. Go inside `./peer-chat/ui-src/` and run `npm install` to install UI dependencies.
6. Run `npm run ui:start:agent1` in that same terminal.
7. Go to `localhost:3001`.
<!--- 6. Change this line in the `package.json` on that folder:
`ui:start:agent1": "REACT_APP_WEBSOCKET_INTERFACE='ws://localhost:3401' PORT=4001 react-scripts start`
to 
`ui:start:agent1": "REACT_APP_WEBSOCKET_INTERFACE='ws://localhost:3403' PORT=4001 react-scripts start`
to point to the `peer-chat` conductor. -->


<!--- 11. OPTIONAL: Run `npm run ui:start:agent2` in a new terminal to start a second client.
12. OPTIONAL: Go to `localhost:3002`. -->

## Want to do it yourself?

This repository is a helper aggregation of both hApps, with executable files included and lots of customization options omitted.

If you want to recreate the same setup from scratch on your machine, you can do the following:

1. Clone both repositories in the same folder.

```bash
git clone https://github.com/Holo-Host/DeepKey
git clone https://github.com/holochain/identity-manager
git clone https://github.com/holochain/peer-chat
```

2. Enter the `DeepKey` folder.
3. Enter the nix-shell with `nix-shell`.
4. Compile the dna with `hc package`.
5. Rename the `dist` folder to `dna`.

In another terminal:

6. Enter the `identity-manager` folder.
7. Enter the nix-shell with `nix-shell`.
8. Run `npm run hc:build`.
9. Run `npm run hc:start`.
10. It's very likely that the generated hash of your compiled applications does not match the binary previously configured. In this case, the `npm run hc:start` command will give you a warning, and you'll need to change the hashes to the appropriate ones in `./identity-manager/conductor-config.toml`, properties `hash` of the `personas_profiles` dna and `deep_key` dna.