// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import {remarkReadingTime} from './src/remark-reading-time.mjs';
import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";
import expressiveCode from "astro-expressive-code";
// https://github.com/nefrob/vscode-just/blob/main/syntaxes/just.tmLanguage.json
import justfileLang from "./src/justfile-lang.json";

// https://astro.build/config
export default defineConfig({
    site: "https://www.jacob-swanson.com",
    vite: {
        plugins: [tailwindcss()]
    },
    markdown: {
        remarkPlugins: [remarkReadingTime],
        rehypePlugins: [
            [
                rehypeExternalLinks,
                {
                    target: "_blank",
                    rel: ["noopener noreferrer"]
                }
            ]
        ]
    },
    integrations: [icon(), expressiveCode({
        shiki: {
            langs: [
                justfileLang
            ]
        }
    }), mdx(), sitemap(),],
    redirects: {
        // Redirects from Jekyll site
        "/tech/2023/09/19/nixos-proxmox-lxc-setup": "/posts/nixos-proxmox-lxc-setup",
        "/tech/2020/09/24/making-a-btrfs-swapfile": "/posts/making-a-btrfs-swapfile",
        "/tech/2020/07/21/bootstraping-ubuntu": "/posts/bootstraping-ubuntu",
        "/tech/2020/06/21/windows-fresh-install": "/posts/windows-fresh-install",
        "/tech/2020/06/21/fix-broken-steam-desktop-icons": "/posts/fix-broken-steam-desktop-icons",
        "/tech/2019/11/08/firefox-containers-with-aws": "/posts/firefox-containers-with-aws",
        "/tech/2019/05/15/change-docker-ip-range": "/posts/change-docker-ip-range",
        "/tech/2019/02/24/flashing-leneageos-14-to-nexus-7-2012": "/posts/flashing-lineageos-14-to-nexus-7-2012",
        "/tech/2019/02/16/capturing-game-audio-separately-using-shadowplay-and-voicemeeter-banana": "/posts/capturing-game-audio-separately-using-shadowplay-and-voicemeeter-banana",
        "/tech/2018/12/18/installing-openjdk11-on-ubuntu-1804": "/posts/installing-openjdk11-on-ubuntu-1804",
        "/tech/2018/11/26/printer-pid-tuning": "/posts/printer-pid-tuning",
        "/tech/2023/09/19/nixos-proxmox-lxc-setup.html": "/posts/nixos-proxmox-lxc-setup",
        "/tech/2020/09/24/making-a-btrfs-swapfile.html": "/posts/making-a-btrfs-swapfile",
        "/tech/2020/07/21/bootstraping-ubuntu.html": "/posts/bootstraping-ubuntu",
        "/tech/2020/06/21/windows-fresh-install.html": "/posts/windows-fresh-install",
        "/tech/2020/06/21/fix-broken-steam-desktop-icons.html": "/posts/fix-broken-steam-desktop-icons",
        "/tech/2019/11/08/firefox-containers-with-aws.html": "/posts/firefox-containers-with-aws",
        "/tech/2019/05/15/change-docker-ip-range.html": "/posts/change-docker-ip-range",
        "/tech/2019/02/24/flashing-leneageos-14-to-nexus-7-2012.html": "/posts/flashing-lineageos-14-to-nexus-7-2012",
        "/tech/2019/02/16/capturing-game-audio-separately-using-shadowplay-and-voicemeeter-banana.html": "/posts/capturing-game-audio-separately-using-shadowplay-and-voicemeeter-banana",
        "/tech/2018/12/18/installing-openjdk11-on-ubuntu-1804.html": "/posts/installing-openjdk11-on-ubuntu-1804",
        "/tech/2018/11/26/printer-pid-tuning.html": "/posts/printer-pid-tuning",
    }
});