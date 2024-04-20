"use strict";
exports.id = 910;
exports.ids = [910];
exports.modules = {

/***/ 602:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Chat)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widget_components_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widget_components_email__WEBPACK_IMPORTED_MODULE_2__]);
_widget_components_email__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Chat({ isChatTrigger , chat , emailForm =false  }) {
    const chatContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!chatContainerRef.current) return;
        chatContainerRef.current.scrollTo({
            behavior: "smooth",
            top: 99999
        });
    }, [
        isChatTrigger
    ]);
    function parseString(str) {
        let sender = str.substring(0, 1);
        let message = str.substring(2);
        return [
            sender,
            message
        ];
    }
    const Messages = chat.map((item, index)=>{
        const parsedStr = parseString(item);
        const isIn = parsedStr[0] === "i";
        const classNames = isIn ? "chatbox-chat-message-in" : "chatbox-chat-message-out";
        const Message = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `chatbox-chat-message ${classNames}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: parsedStr[1]
                })
            });
        if (emailForm && index === 0) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Message, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_widget_components_email__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                ]
            }, 9999);
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Message, {})
        }, index);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "chatbox-chat",
        ref: chatContainerRef,
        children: Messages
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 775:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(853);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__]);
react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Form({ message , setMessage , onSendMessage  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "chatbox-form",
        onSubmit: (e)=>{
            e.preventDefault();
            onSendMessage();
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"], {
                autoFocus: true,
                required: true,
                name: "message",
                placeholder: "Write a message...",
                className: "chatbox-form-message",
                maxRows: 5,
                value: message,
                onChange: (event)=>{
                    setMessage(event.target.value.split("\n").filter((v)=>v).join(" "));
                },
                onKeyUp: (event)=>{
                    if (event.key === "Enter") {
                        event.preventDefault();
                        onSendMessage();
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "submit",
                    className: "chatbox-form-submit",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        strokeWidth: "1.5",
                        stroke: "#666",
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                stroke: "none",
                                d: "M0 0h24v24H0z",
                                fill: "none"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                x1: "10",
                                y1: "14",
                                x2: "21",
                                y2: "3"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"
                            })
                        ]
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 777:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Email)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_2__]);
_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Email() {
    const { isEmailSent , email , setEmail , onSendEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    if (isEmailSent) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "chatbox-widget-email-form",
        children: "Thank you for your email. We'll be in touch as soon as possible."
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "chatbox-widget-email-form",
        onSubmit: (event)=>{
            event.preventDefault();
            onSendEmail();
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Don’t have time to wait for a response? Leave your email and we’ll be in touch as soon as possible."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "email",
                placeholder: "Enter email address",
                value: email,
                onChange: (event)=>setEmail(event.target.value)
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 997:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "e": () => (/* binding */ ChatBoxProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_2__]);
nanoid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        window.location.reload();
        return null;
    }
    return item.value;
}
// default is 24 hours
function setWithExpiry(key, value, ttl = 24 * 60 * 60 * 1000) {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + ttl
    };
    localStorage.setItem(key, JSON.stringify(item));
}
const defaultState = {
    showOnInitial: false
};
const ChatBoxContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultState);
function ChatBoxProvider({ themeColor , textColor , autoMessage , title , description , showOnInitial , children  }) {
    let initialID = "visitor";
    const localID = getWithExpiry("chatbox_id");
    const [UID, setUID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localID ? localID : initialID);
    const [chatInitiated, setChatInitiated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localID ? true : false);
    const [isEmailSent, setIsEmailSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getWithExpiry("emailSent"));
    const [hasBeen5Minutes, setHasBeen5Minutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getWithExpiry("hasBeen5Minutes"));
    const [isChatTrigger, setIsChatTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(performance.now());
    const [chat, setChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isModalShow, setIsModalShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(showOnInitial);
    async function fetchList(id = UID) {
        const response = await fetch(`/api/chatbox/chat/${id}`, {
            method: "GET"
        });
        const data = await response.json();
        setChat(data.chatData);
    }
    const onSendMessage = async ()=>{
        try {
            let id = UID;
            let chatInitiatedTemp = chatInitiated;
            if (!chatInitiated) {
                id = (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)(10);
                const initResponse = await fetch(`/api/chatbox/slack/${id}`, {
                    method: "POST"
                });
                setWithExpiry("chatbox_id", id);
                if (initResponse.status !== 200) {
                    localStorage.removeItem("chatbox_id");
                    localStorage.removeItem("hasBeen5Minutes");
                    localStorage.removeItem("emailSent");
                    throw new Error("Failed to init chat");
                }
                setChatInitiated(true);
                setUID(id);
            }
            // If it has been 5 minutes after the last message, resend notification to slack.
            const hasBeen5Minutes = getWithExpiry("hasBeen5Minutes");
            setWithExpiry("hasBeen5Minutes", "false", 5 * 60 * 1000);
            setHasBeen5Minutes(false);
            if (!hasBeen5Minutes && chatInitiatedTemp) {
                const initResponse = await fetch(`/api/chatbox/slack/${id}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        reminder: "Reminder"
                    })
                });
                if (initResponse.status !== 200) {
                    localStorage.removeItem("hasBeen5Minutes");
                    setHasBeen5Minutes(true);
                    throw new Error("Failed to post reminder.");
                }
            }
            let replyText = "i:" + message;
            const replyResponse = await fetch(`/api/chatbox/chat/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: replyText
                })
            });
            if (replyResponse.status !== 200) {
                throw new Error("Failed to reply");
            }
            await fetchList(id);
            setIsChatTrigger(performance.now());
            setMessage("");
        } catch (err) {
            alert(err);
        }
    };
    const onSendEmail = async ()=>{
        try {
            if (isEmailSent) return;
            let id = UID;
            if (!chatInitiated) {
                id = (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)(10);
                setWithExpiry("chatbox_id", id);
                setWithExpiry("hasBeen5Minutes", "false", 5 * 60 * 1000);
                setUID(id);
            }
            const response = await fetch(`/api/chatbox/slack-email/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            });
            if (response.status !== 200) {
                throw new Error("Failed to send email address");
            }
            setWithExpiry("emailSent", "true");
            setIsEmailSent(true);
        } catch (err) {
            alert(err);
        }
    };
    const onModalShow = (status)=>{
        setIsModalShow(status);
        if (status) setIsChatTrigger(performance.now());
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!chatInitiated || !isModalShow) return;
        fetchList();
        const interval = setInterval(()=>{
            fetchList();
        }, 3000);
        return ()=>clearInterval(interval);
    }, [
        chatInitiated,
        isModalShow,
        UID,
        hasBeen5Minutes
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatBoxContext.Provider, {
        value: {
            themeColor,
            textColor,
            autoMessage,
            title,
            description,
            showOnInitial,
            isModalShow,
            onModalShow,
            isChatTrigger,
            chat,
            message,
            setMessage,
            onSendMessage,
            isEmailSent,
            email,
            setEmail,
            onSendEmail
        },
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatBoxContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;