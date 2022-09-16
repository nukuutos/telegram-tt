"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[9970],{22275:(t,e,a)=>{a.d(e,{Z:()=>h});var n=a(14050),i=a(33555),s=a(11192),o=a(83158),d=a(32340),r=a(59107),c=a(13103),l=a(231);const h=(0,n.X$)((0,i.c$)(((t,e)=>{let{userId:a}=e;const n=(0,s.jr)(t),i=a&&(0,s.dy)(t,a);return{chat:n,contactName:i?(0,o.Vl)(i):void 0}}))((t=>{let{isOpen:e,chat:a,userId:s,contactName:o,onClose:h}=t;const{deleteChatMember:u}=(0,i.Sv)(),p=(0,r.Z)(),f=(0,n.I4)((()=>{u({chatId:a.id,userId:s}),h()}),[a,u,h,s]);if(a&&s)return n.ZP.createElement(c.Z,{isOpen:e,onClose:h,onEnter:f,className:"delete",title:p("GroupRemoved.Remove")},n.ZP.createElement("p",null,(0,d.Z)(p("PeerInfo.Confirm.RemovePeer",o))),n.ZP.createElement(l.Z,{color:"danger",className:"confirm-dialog-button",isText:!0,onClick:f},p("lng_box_remove")),n.ZP.createElement(l.Z,{className:"confirm-dialog-button",isText:!0,onClick:h},p("Cancel")))})))},27225:(t,e,a)=>{a.d(e,{Co:()=>S,bZ:()=>M,ft:()=>R});var n=a(33555),i=a(6137),s=a(91713),o=a(83716),d=a(71226),r=a(5161),c=a(11192),l=a(60782),h=a(69118),u=a(83158),p=a(53551),f=a(78958),C=a(42431),m=a(16974),I=a(50711),g=a(9211);const v={id:o.aw,accessHash:"0",type:"userTypeRegular",isMin:!0,username:"",phoneNumber:""},w=(0,h.P2)((t=>t()),3e3,!0),y=(0,h.Ds)((t=>t()),500,!1,!0);async function b(t,e,a){var s;let h=arguments.length>3&&void 0!==arguments[3]&&arguments[3],u=(0,n.Rd)();const p=null===(s=(0,c.VF)(u))||void 0===s?void 0:s.message,f=await(0,d.t9)("fetchChats",{limit:o.Ov,offsetDate:a,archived:"archived"===t,withPinned:h,serverTimeOffset:u.serverTimeOffset,lastLocalServiceMessage:p});if(!f)return;const{chatIds:C}=f;if(C.length>0&&C[0]===e&&C.shift(),u=(0,n.Rd)(),h&&"active"===t){if(!C.includes(o.aw)){const t=await(0,d.t9)("fetchChat",{type:"user",user:v});u=(0,n.Rd)();const e=t&&(0,c.Z1)(u,t.chatId);e&&(C.unshift(e.id),f.chats.unshift(e),p&&(e.lastMessage=p))}const e=(0,c.jr)(u),a=e?[e]:[],i=(0,c.P2)(u)||[];u.currentUserId&&u.users.byId[u.currentUserId]&&i.push(u.users.byId[u.currentUserId]),u=(0,r.s5)(u,(0,l.ee)(i.concat(f.users),"id")),u=(0,r.ps)(u,f.userStatusesById),u=(0,r.SL)(u,(0,l.ee)(a.concat(f.chats),"id")),u=(0,r.Mg)(u,t,C)}else h&&"archived"===t?(u=(0,r.Sh)(u,(0,l.ee)(f.users,"id")),u=(0,r.zn)(u,f.userStatusesById),u=(0,r.GL)(u,(0,l.ee)(f.chats,"id")),u=(0,r.Mg)(u,t,C)):(u=(0,r.Sh)(u,(0,l.ee)(f.users,"id")),u=(0,r.zn)(u,f.userStatusesById),u=(0,r.GL)(u,(0,l.ee)(f.chats,"id")),u=(0,r.B1)(u,t,C));u=(0,r.vv)(u,t,f),Object.keys(f.draftsById).forEach((t=>{u=(0,r.pf)(u,t,i._f,"draft",f.draftsById[t])})),Object.keys(f.replyingToById).forEach((t=>{u=(0,r.pf)(u,t,i._f,"replyingToId",f.replyingToById[t])})),0!==C.length||u.chats.isFullyLoaded[t]||(u={...u,chats:{...u.chats,isFullyLoaded:{...u.chats.isFullyLoaded,[t]:!0}}}),(0,n.R3)(u)}async function R(t){const e=await(0,d.t9)("fetchFullChat",t);if(!e)return;const{users:a,userStatusesById:i,fullInfo:s,groupCall:o,membersCount:c}=e;let h=(0,n.Rd)();if(a&&(h=(0,r.Sh)(h,(0,l.ee)(a,"id"))),i&&(h=(0,r.zn)(h,i)),o){const t=(0,C.$5)(h,o.id);h=(0,f.AH)(h,o.id,(0,l.CE)(o,["connectionState"]),void 0,t?void 0:o.participantsCount)}h=(0,r.a4)(h,t.id,{fullInfo:s,...c&&{membersCount:c}}),(0,n.R3)(h);const u=s.stickerSet;return u&&(0,n.Sv)().loadStickers({stickerSetInfo:{id:u.id,accessHash:u.accessHash}}),e}async function M(t){try{return await(0,d.t9)("migrateChat",t)}catch(t){return void("CHANNELS_TOO_MUCH"===t.message?(0,n.Sv)().openLimitReachedModal({limit:"channels"}):(0,n.Sv)().showDialog({data:{...t,hasErrorKey:!0}}))}}async function S(t){const e=(0,n.Rd)(),a=(0,c.DI)(e,t);if(a&&!a.isMin)return a;const i=await(0,d.t9)("getChatByUsername",t);return i?((0,n.R3)((0,r.a4)((0,n.Rd)(),i.id,i)),i):void 0}async function P(t,e,a,i){const s=await S(a);if(!s)return;const o=(0,c.dy)((0,n.Rd)(),s.id);o&&o.isAttachMenuBot?t.callAttachMenuBot({botId:o.id,chatId:e,..."string"==typeof i&&{startParam:i}}):t.showNotification({message:I.i0("WebApp.AddToAttachmentUnavailableError")})}(0,n.iw)("preloadTopChatMessages",(async(t,e)=>{const a=new Set;for(let n=0;n<o.Mo;n++){await(0,h.wO)(100);const{chatId:n}=(0,c.Bt)(t)||{},s=(0,m.gO)(o.Nf),d=null==s?void 0:s.find((t=>t!==n&&!a.has(t)));if(!d)return;a.add(d),e.loadViewportMessages({chatId:d,threadId:i._f})}})),(0,n.iw)("openChat",((t,e,a)=>{var n;const{id:s,threadId:o=i._f}=a;if(!s)return;const{currentUserId:r}=t,l=(0,c.Z1)(t,s);if(null!=l&&l.hasUnreadMark&&e.toggleChatUnread({id:s}),null!=l&&null!==(n=l.lastMessage)&&void 0!==n&&n.threadInfo&&e.requestThreadInfoUpdate({chatId:l.lastMessage.threadInfo.chatId,threadId:l.lastMessage.threadInfo.threadId}),l)(0,u.Hp)(l)&&!l.isMin&&e.requestChatUpdate({chatId:s});else if(s===r)(0,d.t9)("fetchChat",{type:"self"});else{const e=(0,c.dy)(t,s);e&&(0,d.t9)("fetchChat",{type:"user",user:e})}o!==i._f&&((0,c.qS)(t,s,o)||e.requestThreadInfoUpdate({chatId:s,threadId:o}))})),(0,n.iw)("openLinkedChat",(async(t,e,a)=>{var n;const{id:i}=a,s=(0,c.Z1)(t,i);if(!s)return;const o=await(0,d.t9)("fetchFullChat",s);null!=o&&null!==(n=o.fullInfo)&&void 0!==n&&n.linkedChatId&&e.openChat({id:o.fullInfo.linkedChatId})})),(0,n.iw)("focusMessageInComments",(async(t,e,a)=>{const{chatId:n,threadId:i,messageId:s}=a,o=(0,c.Z1)(t,n);o&&await(0,d.t9)("requestThreadInfoUpdate",{chat:o,threadId:i})&&e.focusMessage({chatId:n,threadId:i,messageId:s})})),(0,n.iw)("openSupportChat",(async(t,e)=>{const a=(0,c.P_)(t);if(a)return void e.openChat({id:a.id,shouldReplaceHistory:!0});e.openChat({id:o.AJ,shouldReplaceHistory:!0});const n=await(0,d.t9)("fetchChat",{type:"support"});n&&e.openChat({id:n.chatId,shouldReplaceHistory:!0})})),(0,n.iw)("loadAllChats",(async(t,e,a)=>{const i=a.listType,{onReplace:s}=a;let{shouldReplace:d}=a,r=0;for(;d||!(0,n.Rd)().chats.isFullyLoaded[i];){if(r++>=100)return void(o.eM&&console.error("`actions/loadAllChats`: Infinite loop detected"));if("connectionStateReady"!==(t=(0,n.Rd)()).connectionState||"authorizationStateReady"!==t.authState)return;const e=!d&&t.chats.listIds[i],a=e?e.map((e=>t.chats.byId[e])).filter((e=>Boolean(null==e?void 0:e.lastMessage)&&e.id!==o.aw&&!(0,c.ep)(t,e.id))).sort(((t,e)=>t.lastMessage.date-e.lastMessage.date))[0]:void 0;await b(i,null==a?void 0:a.id,null==a?void 0:a.lastMessage.date,d),d&&(null==s||s(),d=!1)}})),(0,n.iw)("loadFullChat",((t,e,a)=>{const{chatId:n,force:i}=a,s=(0,c.Z1)(t,n);s&&(i?R(s):y((()=>R(s))))})),(0,n.iw)("loadTopChats",(()=>{w((()=>b("active")))})),(0,n.iw)("requestChatUpdate",((t,e,a)=>{var n;const{serverTimeOffset:i}=t,{chatId:s}=a,r=(0,c.Z1)(t,s);r&&(0,d.t9)("requestChatUpdate",{chat:r,serverTimeOffset:i,...s===o.aw&&{lastLocalMessage:null===(n=(0,c.VF)(t))||void 0===n?void 0:n.message}})})),(0,n.iw)("updateChatMutedState",((t,e,a)=>{const{serverTimeOffset:i}=t,{chatId:s,isMuted:o}=a,l=(0,c.Z1)(t,s);l&&((0,n.R3)((0,r.a4)(t,s,{isMuted:o})),(0,d.t9)("updateChatMutedState",{chat:l,isMuted:o,serverTimeOffset:i}))})),(0,n.iw)("createChannel",((t,e,a)=>{const{title:i,about:o,photo:l,memberIds:h}=a;!async function(t,e,a,i){let o;(0,n.R3)({...(0,n.Rd)(),chatCreation:{progress:s.Nh.InProgress}});try{o=await(0,d.t9)("createChannel",{title:t,about:a,users:e})}catch(t){const e=(0,n.Rd)();(0,n.R3)({...e,chatCreation:{progress:s.Nh.Error}}),"CHANNELS_TOO_MUCH"===t.message?(0,n.Sv)().openLimitReachedModal({limit:"channels"}):(0,n.Sv)().showDialog({data:{...t,hasErrorKey:!0}})}if(!o)return;const{id:c,accessHash:l}=o;let h=(0,n.Rd)();h=(0,r.a4)(h,c,o),h={...h,chatCreation:{...h.chatCreation,progress:o?s.Nh.Complete:s.Nh.Error}},(0,n.R3)(h),(0,n.Sv)().openChat({id:c,shouldReplaceHistory:!0}),c&&l&&i&&await(0,d.t9)("editChatPhoto",{chatId:c,accessHash:l,photo:i})}(i,h.map((e=>(0,c.dy)(t,e))).filter(Boolean),o,l)})),(0,n.iw)("joinChannel",((t,e,a)=>{const{chatId:i}=a,s=(0,c.Z1)(t,i);if(!s)return;const{id:o,accessHash:r}=s;o&&r&&async function(t,e){try{await(0,d.t9)("joinChannel",{channelId:t,accessHash:e})}catch(t){"CHANNELS_TOO_MUCH"===t.message?(0,n.Sv)().openLimitReachedModal({limit:"channels"}):(0,n.Sv)().showDialog({data:{...t,hasErrorKey:!0}})}}(o,r)})),(0,n.iw)("deleteChatUser",((t,e,a)=>{var i;const{chatId:s,userId:o}=a,l=(0,c.Z1)(t,s),h=(0,c.dy)(t,o);l&&h&&(t=(0,r.Dd)(t,s),(0,n.R3)(t),(null===(i=(0,c.Bt)(t))||void 0===i?void 0:i.chatId)===s&&e.openChat({id:void 0}),(0,d.t9)("deleteChatUser",{chat:l,user:h}))})),(0,n.iw)("deleteChat",((t,e,a)=>{var i;const{chatId:s}=a,o=(0,c.Z1)(t,s);o&&(t=(0,r.Dd)(t,s),(0,n.R3)(t),(null===(i=(0,c.Bt)(t))||void 0===i?void 0:i.chatId)===s&&e.openChat({id:void 0}),(0,d.t9)("deleteChat",{chatId:o.id}))})),(0,n.iw)("leaveChannel",((t,e,a)=>{var i;const{chatId:s}=a,o=(0,c.Z1)(t,s);if(!o)return;t=(0,r.Dd)(t,s),(0,n.R3)(t),(null===(i=(0,c.Bt)(t))||void 0===i?void 0:i.chatId)===s&&e.openChat({id:void 0});const{id:l,accessHash:h}=o;l&&h&&(0,d.t9)("leaveChannel",{channelId:l,accessHash:h})})),(0,n.iw)("deleteChannel",((t,e,a)=>{var i;const{chatId:s}=a,o=(0,c.Z1)(t,s);if(!o)return;t=(0,r.Dd)(t,s),(0,n.R3)(t),(null===(i=(0,c.Bt)(t))||void 0===i?void 0:i.chatId)===s&&e.openChat({id:void 0});const{id:l,accessHash:h}=o;l&&h&&(0,d.t9)("deleteChannel",{channelId:l,accessHash:h})})),(0,n.iw)("createGroupChat",((t,e,a)=>{const{title:i,memberIds:o,photo:l}=a;!async function(t,e,a){(0,n.R3)({...(0,n.Rd)(),chatCreation:{progress:s.Nh.InProgress}});try{const i=await(0,d.t9)("createGroupChat",{title:t,users:e});if(!i)return;const{id:o}=i;let c=(0,n.Rd)();c=(0,r.a4)(c,o,i),c={...c,chatCreation:{...c.chatCreation,progress:i?s.Nh.Complete:s.Nh.Error}},(0,n.R3)(c),(0,n.Sv)().openChat({id:o,shouldReplaceHistory:!0}),o&&a&&await(0,d.t9)("editChatPhoto",{chatId:o,photo:a})}catch(t){if("USERS_TOO_FEW"===t.message){const t=(0,n.Rd)();(0,n.R3)({...t,chatCreation:{...t.chatCreation,progress:s.Nh.Error,error:"CreateGroupError"}})}}}(i,o.map((e=>(0,c.dy)(t,e))).filter(Boolean),l)})),(0,n.iw)("toggleChatPinned",((t,e,a)=>{const{id:n,folderId:i}=a,s=(0,c.Z1)(t,n);if(!s)return;const r=(0,g.M)(t,"dialogFolderPinned");if(i){const e=(0,c.Mw)(t,i);if(e){const a=!(0,c.ep)(t,n,i),{pinnedChatIds:s,includedChatIds:o}=e,r=a?[n,...s||[]]:(s||[]).filter((t=>t!==n)),l=[n,...o];(0,d.t9)("editChatFolder",{id:i,folderUpdate:{...e,pinnedChatIds:r,includedChatIds:l}})}}else{const a=(0,c.Ek)(t,n),i=(0,c.ep)(t,n,"archived"===a?o.WS:void 0),l=t.chats.orderedPinnedIds["archived"===a?"archived":"active"];if(((null==l?void 0:l.length)||0)>=r&&!i)return void e.openLimitReachedModal({limit:"dialogFolderPinned"});(0,d.t9)("toggleChatPinned",{chat:s,shouldBePinned:!i})}})),(0,n.iw)("toggleChatArchived",((t,e,a)=>{const{id:n}=a,i=(0,c.Z1)(t,n);i&&(0,d.t9)("toggleChatArchived",{chat:i,folderId:(0,u.pE)(i)?0:o.WS})})),(0,n.iw)("loadChatFolders",(()=>{!async function(){const t=await(0,d.t9)("fetchChatFolders");if(t){const e=(0,n.Rd)();(0,n.R3)({...e,chatFolders:{...e.chatFolders,...t}})}}()})),(0,n.iw)("loadRecommendedChatFolders",(()=>{!async function(){const t=await(0,d.t9)("fetchRecommendedChatFolders");if(t){const e=(0,n.Rd)();(0,n.R3)({...e,chatFolders:{...e.chatFolders,recommended:t}})}}()})),(0,n.iw)("editChatFolders",((t,e,a)=>{const{chatId:n,idsToRemove:i,idsToAdd:s}=a,o=(0,g.M)(t,"dialogFiltersChats");s.some((e=>(0,c.Mw)(t,e).includedChatIds.length>=o))?e.openLimitReachedModal({limit:"dialogFiltersChats"}):(i.forEach((async e=>{const a=(0,c.Mw)(t,e);var i;a&&await(0,d.t9)("editChatFolder",{id:e,folderUpdate:{...a,pinnedChatIds:null===(i=a.pinnedChatIds)||void 0===i?void 0:i.filter((t=>t!==n)),includedChatIds:a.includedChatIds.filter((t=>t!==n))}})})),s.forEach((async e=>{const a=(0,c.Mw)(t,e);a&&await(0,d.t9)("editChatFolder",{id:e,folderUpdate:{...a,includedChatIds:a.includedChatIds.concat(n)}})})))})),(0,n.iw)("editChatFolder",((t,e,a)=>{const{id:n,folderUpdate:i}=a,s=(0,c.Mw)(t,n);s&&(0,d.t9)("editChatFolder",{id:n,folderUpdate:{id:n,emoticon:s.emoticon,pinnedChatIds:s.pinnedChatIds,...i}})})),(0,n.iw)("addChatFolder",((t,e,a)=>{const{folder:i}=a,{orderedIds:s,byId:r}=t.chatFolders,c=(0,g.M)(t,"dialogFilters");Object.keys(r).length>=c?e.openLimitReachedModal({limit:"dialogFilters"}):async function(t,e){const{id:a,description:i,...s}=t;if(await(0,d.t9)("editChatFolder",{id:e+1,folderUpdate:{id:e+1,...s}}),!i)return;const o=(0,n.Rd)(),{recommended:r}=o.chatFolders;r&&(0,n.R3)({...o,chatFolders:{...o.chatFolders,recommended:r.filter((t=>{let{id:e}=t;return e!==a}))}})}(i,Math.max(...s||[],o.WS))})),(0,n.iw)("sortChatFolders",(async(t,e,a)=>{const{folderIds:i}=a;await(0,d.t9)("sortChatFolders",i)&&(t=(0,n.Rd)(),(0,n.R3)({...t,chatFolders:{...t.chatFolders,orderedIds:i}}))})),(0,n.iw)("deleteChatFolder",((t,e,a)=>{const{id:n}=a;(0,c.Mw)(t,n)&&async function(t){await(0,d.t9)("deleteChatFolder",t)}(n)})),(0,n.iw)("toggleChatUnread",((t,e,a)=>{const{id:n}=a,{serverTimeOffset:s}=t,o=(0,c.Z1)(t,n);o&&(o.unreadCount?(0,d.t9)("markMessageListRead",{serverTimeOffset:s,chat:o,threadId:i._f}):(0,d.t9)("toggleDialogUnread",{chat:o,hasUnreadMark:!o.hasUnreadMark}))})),(0,n.iw)("openChatByInvite",(async(t,e,a)=>{const{hash:n}=a,i=await(0,d.t9)("openChatByInvite",n);i&&e.openChat({id:i.chatId})})),(0,n.iw)("openChatByPhoneNumber",(async(t,e,a)=>{const{phoneNumber:i,startAttach:s,attach:l}=a;e.openChat({id:o.AJ});const h=await async function(t){const e=(0,n.Rd)(),a=(0,c.Bk)(e,t);if(a&&!a.isMin)return(0,c.Z1)(e,a.id);const i=await(0,d.t9)("getChatByPhoneNumber",t);return i?((0,n.R3)((0,r.a4)((0,n.Rd)(),i.id,i)),i):void 0}(i);if(!h)return e.openPreviousChat(),void e.showNotification({message:I.i0("lng_username_by_phone_not_found").replace("{phone}",i)});e.openChat({id:h.id}),l&&P(e,h.id,l,s)})),(0,n.iw)("openTelegramLink",((t,e,a)=>{const{url:n}=a,i=n.match(o.g$);if(i)return void(0,p.o)(i[0]);const s=new URL(n.startsWith("http")?n:`https://${n}`);if("t.me"===s.hostname&&"/"===s.pathname)return void window.open(s.toString(),"_blank","noopener");const d=s.hostname.split(".");if(d.length>3)return;const r=3===d.length?`${d[0]}/${s.pathname}`:s.pathname,[l,h,u]=r.split("/").filter(Boolean).map((t=>decodeURI(t))),f=Object.fromEntries(s.searchParams);let C;"joinchat"===l&&(C=h);const m=!(!f.hasOwnProperty("startattach")||f.startattach)||f.startattach;if(l.match(/^\+([0-9]+)(\?|$)/))return void e.openChatByPhoneNumber({phoneNumber:l.substr(1,l.length-1),startAttach:m,attach:f.attach});if((l.startsWith(" ")||l.startsWith("+"))&&(C=l.substr(1,l.length-1)),C)return void e.openChatByInvite({hash:C});if("addstickers"===l||"addemoji"===l)return void e.openStickerSet({stickerSetInfo:{shortName:h}});const I=h||void 0,g=u?Number(u):void 0,v=f.comment?Number(f.comment):void 0;if(f.hasOwnProperty("voicechat")||f.hasOwnProperty("livestream"))e.joinVoiceChatByLink({username:l,inviteHash:f.voicechat||f.livestream});else if("c"===l&&I&&g){const a=`-${I}`;if(!(0,c.Z1)(t,a))return void e.showNotification({message:"Chat does not exist"});e.focusMessage({chatId:a,messageId:g})}else l.startsWith("$")?e.openInvoice({slug:l.substring(1)}):"invoice"===l?e.openInvoice({slug:h}):e.openChatByUsername({username:l,messageId:g||Number(I),commentId:v,startParam:f.start,startAttach:m,attach:f.attach})})),(0,n.iw)("acceptInviteConfirmation",(async(t,e,a)=>{const{hash:n}=a,i=await(0,d.t9)("importChatInvite",{hash:n});i&&e.openChat({id:i.id})})),(0,n.iw)("openChatByUsername",(async(t,e,a)=>{const{username:i,messageId:s,commentId:r,startParam:l,startAttach:h,attach:p}=a,f=(0,c.jr)(t);if(!r)return!f||f.username!==i||h||l?void await async function(t,e,a,i,s,d){let r=(0,n.Rd)();const l=(0,c.jr)(r);if(s&&!d){const a=await S(e);if(!a)return;r=(0,n.Rd)();const i=(0,c.dy)(r,a.id);if(!i)return;if(!(0,u.cS)(i)||!i.isAttachMenuBot)return void t.showNotification({message:I.i0("WebApp.AddToAttachmentUnavailableError")});if(!l)return;return void t.callAttachMenuBot({botId:i.id,chatId:l.id,..."string"==typeof s&&{startParam:s}})}const h=(null==l?void 0:l.username)===e;h||t.openChat({id:o.AJ});const p=await S(e);p?(a?t.focusMessage({chatId:p.id,messageId:a}):h||t.openChat({id:p.id}),i&&t.startBot({botId:p.id,param:i}),d&&P(t,p.id,d,s)):h||(t.openPreviousChat(),t.showNotification({message:"User does not exist"}))}(e,i,s,l,h,p):void e.focusMessage({chatId:f.id,messageId:s});const{chatId:C,type:m}=(0,c.Bt)(t)||{},g=(0,c.DI)(t,i);if(C&&g&&"thread"===m){const a=(0,c.tZ)(t,C,s);if(a&&a.chatId===C)return void e.focusMessage({chatId:a.chatId,threadId:a.threadId,messageId:r})}s&&async function(t,e,a,i){t.openChat({id:o.AJ});const s=await S(e);if(!s)return;const r=(0,n.Rd)(),l=(0,c.tZ)(r,s.id,a);let h;if(l)h=l.chatId;else{const t=await(0,d.t9)("requestThreadInfoUpdate",{chat:s,threadId:a});if(!t)return;h=t.discussionChatId}h&&t.focusMessage({chatId:h,threadId:a,messageId:Number(i)})}(e,i,s,r)})),(0,n.iw)("togglePreHistoryHidden",(async(t,e,a)=>{const{chatId:n,isEnabled:i}=a;let s=(0,c.Z1)(t,n);if(s){if((0,u.G9)(s)){if(s=await M(s),!s)return;e.openChat({id:s.id})}(0,d.t9)("togglePreHistoryHidden",{chat:s,isEnabled:i})}})),(0,n.iw)("updateChatDefaultBannedRights",((t,e,a)=>{const{chatId:n,bannedRights:i}=a,s=(0,c.Z1)(t,n);s&&(0,d.t9)("updateChatDefaultBannedRights",{chat:s,bannedRights:i})})),(0,n.iw)("updateChatMemberBannedRights",(async(t,e,a)=>{const{chatId:i,userId:s,bannedRights:o}=a;let l=(0,c.Z1)(t,i);const h=(0,c.dy)(t,s);if(!l||!h)return;if((0,u.G9)(l)){if(l=await M(l),!l)return;e.openChat({id:l.id})}await(0,d.t9)("updateChatMemberBannedRights",{chat:l,user:h,bannedRights:o}),t=(0,n.Rd)();const p=(0,c.Z1)(t,i);if(!p||!p.fullInfo)return;const{members:f,kickedMembers:C}=p.fullInfo,m=Boolean(o.viewMessages),I=!Object.keys(o).length;(0,n.R3)((0,r.a4)(t,i,{fullInfo:{...p.fullInfo,...f&&m&&{members:f.filter((t=>t.userId!==s))},...f&&!m&&{members:f.map((t=>t.userId===s?{...t,bannedRights:o}:t))},...I&&C&&{kickedMembers:C.filter((t=>t.userId!==s))}}}))})),(0,n.iw)("updateChatAdmin",(async(t,e,a)=>{const{chatId:i,userId:s,adminRights:o,customTitle:l}=a;let h=(0,c.Z1)(t,i);const p=(0,c.dy)(t,s);if(!h||!p)return;if((0,u.G9)(h)){if(h=await M(h),!h)return;e.openChat({id:h.id})}await(0,d.t9)("updateChatAdmin",{chat:h,user:p,adminRights:o,customTitle:l});const f=await(0,d.t9)("fetchFullChat",h);if(null==f||!f.fullInfo)return;const{adminMembers:C}=f.fullInfo,m=!Object.keys(o).length;t=(0,n.Rd)(),(0,n.R3)((0,r.a4)(t,i,{fullInfo:{...f.fullInfo,...C&&m&&{adminMembers:C.filter((t=>t.userId!==s))},...C&&!m&&{adminMembers:C.map((t=>t.userId===s?{...t,adminRights:o,customTitle:l}:t))}}}))})),(0,n.iw)("updateChat",(async(t,e,a)=>{const{chatId:i,title:o,about:l,photo:h}=a,u=(0,c.Z1)(t,i);u&&((0,n.R3)((0,r.H9)((0,n.Rd)(),s.wv.InProgress)),await Promise.all([u.title!==o?(0,d.t9)("updateChatTitle",u,o):void 0,u.fullInfo&&u.fullInfo.about!==l?(0,d.t9)("updateChatAbout",u,l):void 0,h?(0,d.t9)("editChatPhoto",{chatId:i,accessHash:u.accessHash,photo:h}):void 0]),(0,n.R3)((0,r.H9)((0,n.Rd)(),s.wv.Complete)))})),(0,n.iw)("toggleSignatures",((t,e,a)=>{const{chatId:n,isEnabled:i}=a,s=(0,c.Z1)(t,n);s&&(0,d.t9)("toggleSignatures",{chat:s,isEnabled:i})})),(0,n.iw)("loadGroupsForDiscussion",(async t=>{const e=await(0,d.t9)("fetchGroupsForDiscussion");if(!e)return;const a=e.reduce(((t,e)=>(e&&(t[e.id]=e),t)),{});t=(0,n.Rd)(),t=(0,r.fZ)(t,a),(0,n.R3)({...t,chats:{...t.chats,forDiscussionIds:Object.keys(a)}})})),(0,n.iw)("linkDiscussionGroup",(async(t,e,a)=>{const{channelId:n,chatId:i}=a,s=(0,c.Z1)(t,n);let o=(0,c.Z1)(t,i);if(!s||!o)return;if((0,u.G9)(o)){if(o=await M(o),!o)return;e.openChat({id:o.id})}let{fullInfo:r}=o;if(!r){const t=await(0,d.t9)("fetchFullChat",o);if(!t)return;r=t.fullInfo}r.isPreHistoryHidden&&await(0,d.t9)("togglePreHistoryHidden",{chat:o,isEnabled:!1}),(0,d.t9)("setDiscussionGroup",{channel:s,chat:o})})),(0,n.iw)("unlinkDiscussionGroup",(async(t,e,a)=>{var n;const{channelId:i}=a,s=(0,c.Z1)(t,i);if(!s)return;let o;null!==(n=s.fullInfo)&&void 0!==n&&n.linkedChatId&&(o=(0,c.Z1)(t,s.fullInfo.linkedChatId)),await(0,d.t9)("setDiscussionGroup",{channel:s}),o&&R(o)})),(0,n.iw)("setActiveChatFolder",((t,e,a)=>{if(!(a+1>(0,g.M)(t,"dialogFilters")))return{...t,chatFolders:{...t.chatFolders,activeChatFolder:a}};e.openLimitReachedModal({limit:"dialogFilters"})})),(0,n.iw)("resetOpenChatWithText",(t=>({...t,openChatWithText:void 0}))),(0,n.iw)("loadMoreMembers",(async t=>{var e,a;const{chatId:i}=(0,c.Bt)(t)||{},s=i?(0,c.Z1)(t,i):void 0;if(!s||(0,u.G9)(s))return;const o=(null===(e=s.fullInfo)||void 0===e||null===(a=e.members)||void 0===a?void 0:a.length)||void 0,h=await(0,d.t9)("fetchMembers",s.id,s.accessHash,"recent",o);if(!h)return;const{members:p,users:f,userStatusesById:C}=h;p&&p.length&&(t=(0,n.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(f,"id")),t=(0,r.zn)(t,C),t=(0,r.iX)(t,s,p),(0,n.R3)(t))})),(0,n.iw)("addChatMembers",(async(t,e,a)=>{const{chatId:n,memberIds:i}=a,o=(0,c.Z1)(t,n),r=i.map((e=>(0,c.dy)(t,e))).filter(Boolean);o&&r.length&&(e.setNewChatMembersDialogState(s.WB.Loading),await(0,d.t9)("addChatMembers",o,r),e.setNewChatMembersDialogState(s.WB.Closed),R(o))})),(0,n.iw)("deleteChatMember",(async(t,e,a)=>{const{chatId:n,userId:i}=a,s=(0,c.Z1)(t,n),o=(0,c.dy)(t,i);s&&o&&(await(0,d.t9)("deleteChatMember",s,o),R(s))})),(0,n.iw)("toggleIsProtected",((t,e,a)=>{const{chatId:n,isProtected:i}=a,s=(0,c.Z1)(t,n);s&&(0,d.t9)("toggleIsProtected",{chat:s,isProtected:i})})),(0,n.iw)("setChatEnabledReactions",(async(t,e,a)=>{const{chatId:n,enabledReactions:i}=a,s=(0,c.Z1)(t,n);s&&(await(0,d.t9)("setChatEnabledReactions",{chat:s,enabledReactions:i}),R(s))})),(0,n.iw)("loadChatSettings",(async(t,e,a)=>{const{chatId:i}=a,s=(0,c.Z1)(t,i);if(!s)return;const o=await(0,d.t9)("fetchChatSettings",s);o&&(0,n.R3)((0,r.a4)((0,n.Rd)(),s.id,{settings:o}))})),(0,n.iw)("toggleJoinToSend",(async(t,e,a)=>{const{chatId:n,isEnabled:i}=a,s=(0,c.Z1)(t,n);s&&((0,u.ZV)(s)||(0,u.eA)(s))&&await(0,d.t9)("toggleJoinToSend",s,i)})),(0,n.iw)("toggleJoinRequest",(async(t,e,a)=>{const{chatId:n,isEnabled:i}=a,s=(0,c.Z1)(t,n);s&&((0,u.ZV)(s)||(0,u.eA)(s))&&await(0,d.t9)("toggleJoinRequest",s,i)}))},88422:(t,e,a)=>{a.d(e,{FF:()=>b,Mt:()=>M,NH:()=>R,o5:()=>v});var n=a(33555),i=a(42431),s=a(71226),o=a(11192),d=a(64319),r=a(78958),c=a(60782),l=a(5161),h=a(27225),u=a(74753),p=a(77361),f=a(50711);let C,m,I,g=Promise.resolve();const v=()=>{if(!g)return Promise.resolve();const t=new Audio("./voicechat_join.mp3"),e=new Audio("./voicechat_connecting.mp3");e.loop=!0;const a=new Audio("./voicechat_leave.mp3"),n=new Audio("./voicechat_onallowtalk.mp3"),i=new Audio("./call_busy.mp3"),s=new Audio("./call_connect.mp3"),o=new Audio("./call_end.mp3"),d=new Audio("./call_incoming.mp3");d.loop=!0;const r=new Audio("./call_ringing.mp3");return r.loop=!0,I={join:t,allowTalk:n,leave:a,connecting:e,incoming:d,end:o,connect:s,busy:i,ringing:r},g=Promise.all(Object.values(I).map((t=>(t.muted=!0,t.volume=1e-4,t.play().then((()=>{t.pause(),t.volume=1,t.currentTime=0,t.muted=!1})))))).then((()=>{g=void 0})),g};async function w(t){const e=await(0,s.t9)("getGroupCall",{call:t});if(!e)return;let a=(0,n.Rd)();const o=(0,i.$5)(a,t.id);return a=(0,r.AH)(a,t.id,(0,c.CE)(e.groupCall,["connectionState"]),void 0,null!=o&&o.isLoaded?void 0:e.groupCall.participantsCount),a=(0,l.Sh)(a,(0,c.ee)(e.users,"id")),a=(0,l.fZ)(a,(0,c.ee)(e.chats,"id")),(0,n.R3)(a),e.groupCall}async function y(t,e){const a=await(0,s.t9)("fetchGroupCallParticipants",{call:t,offset:e});if(!a)return;let i=(0,n.Rd)();i=(0,l.Sh)(i,(0,c.ee)(a.users,"id")),i=(0,l.fZ)(i,(0,c.ee)(a.chats,"id")),(0,n.R3)(i)}function b(){return C}function R(){return m}function M(){var t;null===(t=C)||void 0===t||t.pause(),m=void 0,C=void 0}(0,n.iw)("toggleGroupCallPanel",(t=>({...t,isCallPanelVisible:!t.isCallPanelVisible}))),(0,n.iw)("subscribeToGroupCallUpdates",(async(t,e,a)=>{const{subscribed:n,id:o}=a,d=(0,i.$5)(t,o);d&&(n&&(await w(d),await y(d)),await(0,s.t9)("toggleGroupCallStartSubscription",{subscribed:n,call:d}))})),(0,n.iw)("createGroupCall",(async(t,e,a)=>{const{chatId:i}=a,d=(0,o.Z1)(t,i);if(!d)return;const c=await(0,s.t9)("createGroupCall",{peer:d});c&&(t=(0,n.Rd)(),(0,n.R3)((0,r.AH)(t,c.id,{...c,chatId:i})),e.joinGroupCall({id:c.id,accessHash:c.accessHash}))})),(0,n.iw)("createGroupCallInviteLink",(async(t,e)=>{const a=(0,i.mU)(t);if(!a||!a.chatId)return;const n=(0,o.Z1)(t,a.chatId);if(!n)return;const r=Boolean(n.username);let{inviteLink:c}=n.fullInfo;r&&(c=await(0,s.t9)("exportGroupCallInvite",{call:a,canSelfUnmute:!1})),c&&((0,d.TE)(c),e.showNotification({message:"Link copied to clipboard"}))})),(0,n.iw)("joinVoiceChatByLink",(async(t,e,a)=>{const{username:n,inviteHash:i}=a,s=await(0,h.Co)(n);if(!s)return void e.showNotification({message:f.i0("NoUsernameFound")});const o=await(0,h.ft)(s);null!=o&&o.groupCall&&e.joinGroupCall({id:o.groupCall.id,accessHash:o.groupCall.accessHash,inviteHash:i})})),(0,n.iw)("joinGroupCall",(async(t,e,a)=>{var s;if(!p.Bi)return;if(t.phoneCall)return void e.toggleGroupCallPanel();const{chatId:o,id:d,accessHash:c,inviteHash:l}=a;!function(){const t=new(window.AudioContext||window.webkitAudioContext);C=new Audio,m=t,C.srcObject=(t=>{const e=t.createOscillator(),a=e.connect(t.createMediaStreamDestination());return e.start(),new MediaStream([Object.assign(a.stream.getAudioTracks()[0],{enabled:!1})])})(t),(0,u.Z)(C)}(),await v();const{groupCalls:{activeGroupCallId:h}}=t;let f=d?(0,i.$5)(t,d):(0,i.Bj)(t,o);(null===(s=f)||void 0===s?void 0:s.id)!==h?h?e.leaveGroupCall({rejoin:a}):f&&h===f.id?e.toggleGroupCallPanel():(f||d&&c||(f=await w({id:d,accessHash:c})),f&&(t=(0,n.Rd)(),t=(0,r.AH)(t,f.id,{...f,inviteHash:l},void 0,f.participantsCount+1),t={...t,groupCalls:{...t.groupCalls,activeGroupCallId:f.id},isCallPanelVisible:!1},(0,n.R3)(t))):e.toggleGroupCallPanel()})),(0,n.iw)("playGroupCallSound",((t,e,a)=>{const{sound:n}=a;if(!I[n])return;const i=()=>{"connecting"!==n&&I.connecting.pause(),"incoming"!==n&&I.incoming.pause(),"ringing"!==n&&I.ringing.pause(),(0,u.Z)(I[n])};g?g.then(i):i()})),(0,n.iw)("loadMoreGroupCallParticipants",(t=>{const e=(0,i.mU)(t);e&&y(e,e.nextOffset)})),(0,n.iw)("requestCall",(async(t,e,a)=>{const{userId:i,isVideo:s}=a;t.phoneCall?e.toggleGroupCallPanel():(0,o.dy)(t,i)&&(await v(),(0,n.R3)({...(0,n.Rd)(),phoneCall:{id:"",state:"requesting",participantId:i,isVideo:s,adminId:t.currentUserId},isCallPanelVisible:!1}))}))},78958:(t,e,a)=>{a.d(e,{AH:()=>d,B6:()=>l,Ic:()=>c,dc:()=>r});var n=a(42431),i=a(60782),s=a(53475),o=a(11192);function d(t,e,a,n,s){var o;const d=Object.values({...null===(o=t.groupCalls.byId[e])||void 0===o?void 0:o.participants,...a.participants}).filter((t=>!t.isLeft)).reduce(((t,e)=>(t[e.id]=e,t)),{});return{...t,groupCalls:{...t.groupCalls,byId:{...t.groupCalls.byId,[e]:{...t.groupCalls.byId[e],...(0,i.CE)(a,["participantsCount"]),...n&&{participantsCount:t.groupCalls.byId[e].participantsCount+n},...void 0!==s&&{participantsCount:s},participants:d}}}}}function r(t,e){const a=(0,n.$5)(t,e);if(a&&a.chatId){const e=(0,o.Z1)(t,a.chatId);e&&(t=(0,s.a4)(t,a.chatId,{fullInfo:{...e.fullInfo,groupCallId:void 0}}))}return{...t,groupCalls:{...t.groupCalls,byId:{...(0,i.CE)(t.groupCalls.byId,[e.toString()])}}}}function c(t,e,a){return t.groupCalls.activeGroupCallId?d(t,t.groupCalls.activeGroupCallId,e,void 0,a):t}function l(t,e,a,i){let s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const o=(0,n.$5)(t,e);return o?d(t,e,{participants:{...o.participants,[a]:{...o.participants[a],...i}}},i.isLeft?s?0:-1:o.participants[a]||s?0:1):t}},42431:(t,e,a)=>{a.d(e,{$5:()=>d,Bj:()=>o,GU:()=>r,Ht:()=>c,fu:()=>h,mU:()=>l});var n=a(14342),i=a(83158),s=a(86087);function o(t,e){const a=(0,n.Z1)(t,e);if(a&&a.fullInfo&&a.fullInfo.groupCallId)return d(t,a.fullInfo.groupCallId)}function d(t,e){return t.groupCalls.byId[e]}function r(t,e,a){var n;return null===(n=d(t,e))||void 0===n?void 0:n.participants[a]}function c(t){var e,a;const s=null===(e=l(t))||void 0===e?void 0:e.chatId;if(!s)return!1;const o=(0,n.Z1)(t,s);return!!o&&((0,i.G9)(o)&&o.isCreator||Boolean(null===(a=o.adminRights)||void 0===a?void 0:a.manageCall))}function l(t){const{groupCalls:{activeGroupCallId:e}}=t;if(e)return d(t,e)}function h(t){const{phoneCall:e,currentUserId:a}=t;if(!e||!e.participantId||!e.adminId)return;const n=e.adminId===a?e.participantId:e.adminId;return(0,s.dy)(t,n)}},53551:(t,e,a)=>{a.d(e,{o:()=>s});var n=a(33555),i=a(77361);const s=t=>{const{protocol:e,searchParams:a,pathname:s,hostname:o}=new URL(t);if("tg:"!==e)return;const{openChatByInvite:d,openChatByUsername:r,openChatByPhoneNumber:c,openStickerSet:l,focusMessage:h,joinVoiceChatByLink:u,openInvoice:p}=(0,n.Sv)(),f=(i.s$?o:s).replace(/^\/\//,""),C={};switch(a.forEach(((t,e)=>{C[e]=t})),f){case"resolve":{const{domain:t,phone:e,post:a,comment:n,voicechat:i,livestream:s,start:o,startattach:d,attach:l}=C,h=!(!C.hasOwnProperty("startattach")||d)||d;"telegrampassport"!==t&&(C.hasOwnProperty("voicechat")||C.hasOwnProperty("livestream")?u({username:t,inviteHash:i||s}):e?c({phone:e,startAttach:h,attach:l}):r({username:t,messageId:Number(a),commentId:Number(n),startParam:o,startAttach:h,attach:l}));break}case"privatepost":{const{post:t,channel:e}=C;h({chatId:`-${e}`,id:t});break}case"bg":case"share":case"msg":case"login":default:break;case"join":{const{invite:t}=C;d({hash:t});break}case"addemoji":case"addstickers":{const{set:t}=C;l({stickerSetInfo:{shortName:t}});break}case"invoice":{const{slug:t}=C;p({slug:t});break}}}}}]);
//# sourceMappingURL=9970.253d98d0960ae30de3ea.js.map