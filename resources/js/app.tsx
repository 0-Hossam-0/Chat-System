// import { createInertiaApp} from "@inertiajs/react";

// import React from "react";
// import { createRoot } from "react-dom/client";

// createInertiaApp({
//     resolve: (name) => {
//         const pages = import.meta.glob("./Pages/**/*.tsx", { eager: true });
//         return pages[`./Pages/${name}.tsx`];
//     },
//     setup({ el, App, props }) {
//         createRoot(el).render(<App {...props} />);
//     },
// });
// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home";
// import RegisterAndLogin from "./Pages/RegisterAndLogin";
// import LoadingLayOut from "./Components/LoadingLayOut";
// import { NotificationProps } from "./Types/Interfaces";
// import Notification from "./Components/Notification";
// import { States } from "./Components/Hooks/States";
// const App = ({ ...props }) => {
//     const [showOverlay, setShowOverlay] = useState<boolean>(false);
//     const [showNotification, setShowNotification] = useState<NotificationProps>(
//         { message: "", type: "Error", show: false }
//     );
//     useEffect(() => {
//         if (window.sessionStorage.getItem("Error")) {
//             setTimeout(() => {
//                 setShowNotification({
//                     type: "Error",
//                     message: "Something went wrong",
//                     show: true,
//                 });
//                 window.sessionStorage.removeItem("Error");
//             }, 100);
//         }
//     }, []);
//     return (
//         <>
//             <LoadingLayOut showOverlay={showOverlay} />
//             <Notification
//                 showNotification={showNotification}
//                 setShowNotification={setShowNotification}
//             />
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/register" element={<RegisterAndLogin />} />
//                 </Routes>
//             </Router>
//         </>
//     );
// };

// export default App;
