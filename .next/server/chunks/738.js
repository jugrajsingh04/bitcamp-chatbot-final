"use strict";
exports.id = 738;
exports.ids = [738];
exports.modules = {

/***/ 738:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChatBoxAdminRoot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(925);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(232);
/* harmony import */ var _shared_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(602);
/* harmony import */ var _shared_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(775);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared_chat__WEBPACK_IMPORTED_MODULE_4__, _shared_form__WEBPACK_IMPORTED_MODULE_5__]);
([_shared_chat__WEBPACK_IMPORTED_MODULE_4__, _shared_form__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function ChatBoxAdmin() {
    const { id , isChatTrigger , chat , message , setMessage , onSendMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "chatbox",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "chatbox-admin-root",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "chatbox-admin-grid",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: "chatbox-admin-header",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            children: [
                                "Hi, chat id: ",
                                id,
                                ":"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_chat__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        chat: chat,
                        isChatTrigger: isChatTrigger
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_form__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        message: message,
                        setMessage: setMessage,
                        onSendMessage: onSendMessage
                    })
                ]
            })
        })
    });
}
function ChatBoxAdminRoot(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { id  } = router.query;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_store__WEBPACK_IMPORTED_MODULE_3__/* .ChatBoxProvider */ .e, {
        id: id,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatBoxAdmin, {})
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "e": () => (/* binding */ ChatBoxProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const defaultState = {};
const ChatBoxContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultState);
function ChatBoxProvider({ children , id  }) {
    const [isChatTrigger, setIsChatTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(performance.now());
    const [chat, setChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    async function fetchList() {
        const response = await fetch(`/api/chatbox/chat/${id}`, {
            method: "GET"
        });
        const data = await response.json();
        setChat(data.chatData);
    }
    const onSendMessage = async ()=>{
        let replyText = "o:" + message;
        await fetch(`/api/chatbox/chat/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: replyText
            })
        });
        await fetchList();
        setIsChatTrigger(performance.now());
        setMessage("");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!id) return;
        fetchList();
        setTimeout(()=>{
            setIsChatTrigger(performance.now());
        }, 100);
        const interval = setInterval(()=>{
            fetchList();
        }, 3000);
        return ()=>clearInterval(interval);
    }, [
        id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatBoxContext.Provider, {
        value: {
            id,
            isChatTrigger,
            chat,
            message,
            setMessage,
            onSendMessage
        },
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatBoxContext);


/***/ })

};
;