/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 DDbrother
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import {
    ApplicationCommandInputType, ApplicationCommandOptionType, findOption,
    registerCommand, sendBotMessage
} from "@api/Commands";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { ChannelStore } from "@webpack/common";

export default definePlugin({
    name: "StarHelper",
    description: "Star's Super Terrific Absolutely Rad-helper (to help Super Terrific Undeniably Perfect Intelligent Bodies)",
    version: "1.0.0",
    authors: [Devs.Star],
    dependencies: ["CommandsAPI"],

    async start() {
        createTagCommand({ name: "plugin-issue", message: "You have plugin issues. This can usually be resolved with the following: \n\n 1. Update your plugins to support versions (usually the latest) but, in some cases you need to choose a version that matches with your server version. \n2. Delete any duplicate plugin jars. \n3. Check for any dependencies that you need to install. \n Note: Plugins are not Mods, your Server Software needs to be Paper.\n-# WorldGuard and WorldEdit are plugins that you commonly need to downgrade." });
        createTagCommand({ name: "paper-migration", message: "You need to follow [Paper's Guide on how to migrate to fabric/vanilla](https://docs.papermc.io/paper/migration#to-vanilla). \nYou can download files by just clicking on all the files you need to download and hitting download at the bottom of your screen." });
        createTagCommand({ name: "logs-please", message: "Please follow: \n\n1. Navigate to your File Manager on your server dashboard. \n2. Enter into the logs folder, scroll to the bottom of the folder, and select the file name **latest.log** and then hit the Download button.\n 3. Upload the contents of the file to [mclo.gs](https://mclo.gs/) and click `Save`. \n4. Send the link of the website here \n-# Please make sure you follow the last step. \n-# Logs are safe to share and help us accurently help you." });
        createTagCommand({ name: "resolved-please", message: "If your issue is resolved feel free to mark your post as Resolved. This can be done by adding the Resolved Tag to your post. (see https://cdn.discordapp.com/attachments/1263852689398173696/1263971147985195048/image.png?ex=66e6a91d&is=66e5579d&hm=cef756c3834e8e968d3b55c7c39fd1676b92ef4b8a79d2614c82f28a6c15aa03&)" });
        createTagCommand({ name: "config-world-issue", message: "You seem to have downgraded your server after starting it in a newer version.\n Delete your config/ folder and then do one of these 3 things to fix your world:\n\n1. Delete your world\n2. Upgrade your server back to the original (newer) version\n3. Use [chunker.app](https://chunker.app/) to convert it properly \n\nNote: You DO NOT need to delete your world to resolve this issue. Please read what I have said above again. \n\n-# If you need help downloading your world, please let me know!" });
        createTagCommand({ name: "world-issue", message: "You seem to have downgraded your server after starting it in a newer version.\n Do one of these 3 things to fix your world:\n\n1. Delete your world\n2. Upgrade your server back to the original (newer) version\n3. Use [chunker.app](https://chunker.app/) to convert it properly \n\nNote: You DO NOT need to delete your world to resolve this issue. Please read what I have said above again. \n\n-# If you need help downloading your world, please let me know!" });
        createTagCommand({ name: "external-server-setup", message: "Follow [this guide](https://support.minehut.com/hc/en-us/articles/33252734474899-How-to-Setup-a-Minehut-External-Hosted-Server) to the best of your ability if you're still encountering issues please send:\n\n If you're running a standalone-paper server send: ``server.properties`` and ``config/paper-global.yml`` \n If you're running a velocity server send: ``velocity.toml`` \n If you're running a waterfall server send: ``config.yml``\n\n Please also send your startup flags and a SS of your MH External Server Settings. " });
        createTagCommand({ name: "contact-support", message: "Please contact !support. They can assist further in your issue." });
        createTagCommand({ name: "lost-email-account", message: "If you have lost access to your email please contact !support and provide them with: DOB, purchase history, and the email you lost access to. If you are missing any of these things or have forgotten the email you lost access to there is nothing we can do to you help." });
        createTagCommand({ name: "appeal", message: "If you would like to appeal your ban please follow !appeal. There will be no support for appeals here." });
        createTagCommand({ name: "performance-issues", message: "If you're having performance issues please:\n\n For **non 1.21+ Paper Servers:** Download [spark.lucko.me](spark.lucko.me) and install it as a plugin or mod (depending on your server software). *Note: 1.21 Paper Servers have Spark pre-installed*\n\nFor **constant lag**: Run the command ``spark profiler start --thread * --timeout 30``\n**For severe momentary lag spikes:** Run the command ``spark profiler start --thread * --only-ticks-over 100 --timeout 300``\n\n Then, wait a few minutes and a link will appear, please send it here." });
        createTagCommand({ name: "improve-performance", message: "You can improve server performance by trying the following:\n\n 1. Lowering your server render distance / decreasing the number of players on your server\n 2. Removing unused plugins, if you have Skript you should also head into https://discord.com/channels/239599059415859200/1027009214478028821 for ways to improve your skripts (Skript is very easily misused)\n 3. Use a clear lag / entity to reduce the strain on your server." });
        createTagCommand({ name: "correct-channels-please", message: "You are in the incorrect channel please use: \nhttps://discord.com/channels/239599059415859200/1027009214478028821 for Skript Help\n https://discord.com/channels/239599059415859200/364448476458778625 for Offers and Requests" });
        createTagCommand({ name: "clear-cookies", message: "Try clearing your cookies and cache. If you are using a vpn please turn it off. If that doesn't work try to switch browsers." });
        createTagCommand({ name: "mc-logs-please", message: "Upload the contents of the file to [mclo.gs](https://mclo.gs/) and click `Save`. \n4. Send the link of the website here -#Please make sure you follow the last step. -#Logs are safe to share and help us accurently help you." });
        createTagCommand({ name: "unsuported-paper-settings", message: "If you want to **allow dupers, perm-block break exploits, or headless-piston exploits** in ``config/paper-global.yml`` please change the following settings at the bottom of the file:\n\n If you want to **dupe TNT, carpets, and other items:** ``allow-piston-duplication: true`` \nIf you want to **break bedrock, portal frames, and other unbreakable blocks:** ``allow-perm-block-break-exploits: true`` \nIf you want to **create headless pistons or have exploits that require them:** ``allow-headless-pistons: true``\n\nMore information can be found [here](https://help.pebblehost.com/en/minecraft/allow-exploits-on-paper-servers-tnt-dupes-bedrock-breaking-etc)!\n" });
        createTagCommand({ name: "via-versions-backwards-rewind", message: "##ViaVersion, ViaBackwards, ViaRewind \nViaVersion only works for players connecting from a later version that what your server is currently running. You need ViaBackwards and/or ViaRewind to supplement it if you decide to let players from older clients connect. Follow https://media.discordapp.net/attachments/977593649133150248/1267800960676139088/image.png?ex=66e6c027&is=66e56ea7&hm=b76a57b2e7a8a03425fe89b5509742d5345d4053e4e83264a8ce289213d1827c&=&format=webp&quality=lossless&width=1724&height=1194 to know what you need to install.\n" });
        createTagCommand({ name: "custom-domain", message: "You can find a [guide on custom domains here](https://support.minehut.com/hc/en-us/articles/27276798670611-How-do-I-set-up-a-custom-domain). \nThis guide covers how to:\n\n1. How to verify your domain on our website with a TXT record \n2. How to create a CNAME record for Java connectivity\n3.(Optional) How to create both an SRV and CNAME record for Java and Bedrock connectivity" });
        createTagCommand({ name: "email-verify", message: "If you **haven't received the email:** Check your spam folder and make sure you're logged into the correct email account\n\nIf you are stuck in an **infinite loop:** Be patient. You can only send one email at a time, if you send multiple you need to manually select the last one. All previous ones are invalidated." });
        createTagCommand({ name: "system-time", message: "For Windows: Navigate to your Date & Time settings and hit Sync Now. Google how to do this on your operating system if you don't use windows / can't find it." });
        createTagCommand({ name: "backup-and-contact-support", message: "Try to load a backup of your server if possible. If your backups were over-written, **stop your server immediately and contact !support**. It's possible that they have further backups but it's important you stop your server so they don't also get over-written." });
        createTagCommand({ name: "mod-issue", message: "You have mod issues. This can usually be resolved with the following:\n\n1. Upgrade your mods to support the correct version (usually the latest) but, in some cases you need to downgrade to a version that matches with your server version. \n2. Delete any duplicate mod jars.\n3. Check for any dependencies that you need to install.\n4. Check and make sure your client side mods match\n\n Note: Mods are not Plugins, your Server Software needs to be SpongeForge or Fabric. Fabric is not Forge, they are not compatible.\n" });
        createTagCommand({ name: "ping-op", message: "boop" });
        createTagCommand({ name: "sftp", message: "You can find a [guide on how to use sftp here](https://support.minehut.com/hc/en-us/articles/27126955782291-How-do-I-use-SFTP-on-my-server). Please note: you need a paid plan in order to use SFTP." });
        createTagCommand({ name: "addons-no-use", message: "Don't use the addons page on the MH Dashboard. Instead:\n\n1. Search for your plugin/mod on [google.com](https://google.com) and download your plugin/mod from a trustworthy source such as: [Modrinth](https://modrinth.com), [Spigot](https://spigotmc.org/), [Bukkit](https://dev.bukkit.org/) or [Github](https://github.com).n \n2. Login and activate the server you wish to add plugins/mods to.\n 3. Head over to the File Manager, and go into the **plugins** or **mods** folder.\n4. Click the **Upload File** icon and upload your plugin/mod.\n 5. Restart your server to load the plugin.\n\nMake sure you download **the correct version** for your server and install any dependencies. **Do not create the folder.** \nYour server software needs to be **Paper** for plugins and **Spongeforge/Fabric** for mods!" });
        createTagCommand({ name: "downtime", message: "Minehut is currently experiencing some downtime. Please be patient and check https://discord.com/channels/239599059415859200/1240643745339281489 for more information if avaliable." });
        createTagCommand({ name: "nice-resolved", message: "Alrighty! I'll go ahead and lock this post + mark it as resolved! Feel free to open a new thread if you have any further questions :) Have a wonderful rest of your day/night!" });
        createTagCommand({ name: "locking-thread", message: "A solution has already been presented. I'm going to ahead and lock this thread." });
        createTagCommand({ name: "external-offline", message: "Please try to do the following:\n Make sure hide-online-players is set to false in the server.properties file\n Make sure enable-status is set to true in the server.properties file\n Make sure sample-count is set to at least 1 in the spigot.yml file\n Make sure the IP address on the Minehut dashboard is a numerical IP and not a domain name, and ensure that the DNS Record Type is set to Port\n Try removing any plugins that change the MOTD or server list, on both your server and proxy\n Ensure your firewall is accepting TCP and ICMP from external addresses\n" });
        createTagCommand({ name: "client-logs-please", message: "Please send us your client logs. They are located in your .minecraft --> logs folder unless you are using a different launcher. Please google how to find the logs for your specific launcher if you are not using the default launcher. Then, upload the contents of the file to [mclo.gs](https://mclo.gs/) and click `Save`. \n4. Send the link of the website here -# Please make sure you follow the last step. -# Logs are safe to share and help us accurently help you. " });
        // createTagCommand({ name: "", message: "" });
    },

    commands: [
        {
            name: "star",
            description: "Star's Helper",

            execute: async (args, ctx) => {
                sendBotMessage(ctx.channel.id, {
                    content: "Hi! This is sent as if I'm Clyde! so cool D:",
                });
                return { content: "Hi! <@976447336496660500>" };
            }
        }
    ],
});

interface Tag {
    name: string;
    message: string;
}

function createTagCommand(tag: Tag){
    registerCommand({
        name: tag.name,
        description: tag.name,
        inputType: ApplicationCommandInputType.BUILT_IN_TEXT,
        options:
            [
                {
                    name: "ping",
                    description: "do not ping the OP",
                    type: ApplicationCommandOptionType.BOOLEAN,
                    required: false
                }
            ],
        execute: async (args, ctx) => {
            if (findOption(args, "ping") === undefined){
                const originalPoster = ChannelStore.getChannel(ctx.channel.id!).ownerId;
                if (originalPoster === undefined) return { content: tag.message };
                return { content: "<@"+originalPoster+"> \n" + tag.message };
            }
            return { content: tag.message };
        }
    }, "StarHelper");
}



