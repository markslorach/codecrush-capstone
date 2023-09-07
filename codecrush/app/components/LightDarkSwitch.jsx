// import { useEffect } from 'react'

// const LightDarkSwitch = () => {
//   useEffect(() => {

//     document.documentElement.setAttribute(
//       "data-theme",
//       localStorage.getItem("theme") === "night" ? "night" : "winter"
//     );
//   }, []);

//   return (
//     <input
//       type="checkbox"
//       className="toggle"
//       defaultChecked={
//         typeof window !== "undefined" && localStorage.getItem("theme") === "night"
//       }
//       onClick={(e) => {
//         let newTheme = e.target.checked ? "night" : "winter";
//         localStorage.setItem("theme", newTheme);
//         document.documentElement.setAttribute("data-theme", newTheme);
//       }}
//     />
//   );
// };

// export default LightDarkSwitch;

