"use strict";
(() => {
var exports = {};
exports.id = 359;
exports.ids = [359];
exports.modules = {

/***/ 721:
/***/ ((module) => {

module.exports = import("@upstash/redis");;

/***/ }),

/***/ 929:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createChatBoxAPI)
/* harmony export */ });
/* harmony import */ var _upstash_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(721);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_upstash_redis__WEBPACK_IMPORTED_MODULE_0__]);
_upstash_redis__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function createChatBoxAPI(options) {
    const redis = _upstash_redis__WEBPACK_IMPORTED_MODULE_0__.Redis.fromEnv();
    return async function(req, res) {
        const method = req.method;
        const api = req.query.chatbox?.[0];
        const chatId = req.query.chatbox?.[1];
        const host = `http://${req.headers.host}`;
        try {
            if (!chatId) throw new Error("Missing chatId");
            switch(api){
                case "chat":
                    switch(method){
                        // GET: /chat/[id]
                        case "GET":
                            const chatData = await redis.lrange(chatId, 0, 2 ** 32 - 1);
                            return res.status(200).json({
                                chatData
                            });
                        // POST: /chat/[id]
                        case "POST":
                            const chatText = req.body.text;
                            const response = await redis.rpush(chatId, chatText);
                            return res.status(200).json({
                                response
                            });
                        default:
                            throw new Error("Method not allowed");
                    }
                case "slack-email":
                    // POST: /slack-email/[id]
                    if (method !== "POST") throw new Error("Method not allowed");
                    const slackEmail = req.body.email;
                    if (!slackEmail) throw new Error("Missing email");
                    const notifyEmailText = `A user left their email address ${slackEmail} with chat id: ${host}/chat/${chatId}`;
                    const requestsEmail = options.webhooks.map(async (webhook)=>{
                        return fetch(webhook, {
                            method: "POST",
                            body: JSON.stringify({
                                text: notifyEmailText
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                    });
                    await Promise.all(requestsEmail);
                    return res.status(200).json({
                        response: "ok"
                    });
                case "slack":
                    // POST: /slack/[id]
                    if (method !== "POST") throw new Error("Method not allowed");
                    let notifyText = `New chat with id: ${host}/chat/${chatId}`;
                    if (req.body) {
                        notifyText = `Old chat with id: ${host}/chat/${chatId} has a new message!`;
                    }
                    const requestsNotify = options.webhooks.map(async (webhook)=>{
                        return fetch(webhook, {
                            method: "POST",
                            body: JSON.stringify({
                                text: notifyText
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                    });
                    await Promise.all(requestsNotify);
                    return res.status(200).json({
                        response: "ok"
                    });
                default:
                    throw new Error("Method not allowed");
            }
        } catch (err) {
            let message = err;
            console.log(err);
            if (err instanceof TypeError) {
                message = err.message;
            }
            return res.status(500).json({
                message
            });
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 184:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(929);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_api__WEBPACK_IMPORTED_MODULE_0__]);
_components_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const ChatBoxAPI = (0,_components_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
    webhooks: [
        process.env.SLACK_WEBHOOK_URL
    ]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatBoxAPI);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(184));
module.exports = __webpack_exports__;

})();