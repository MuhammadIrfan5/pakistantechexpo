// // import "./styles.css";
// import React from "react";
// import styled from "styled-components";
// import s from "csd";

// const StyledTabIndicator = styled.div`
//   position: absolute;
//   width: ${(props) => 100 / props.tabCount}%;
//   top: 100%;
//   left: 0;
//   overflow-y:hidden;

//   transform: translate(${(props) => props.offset}, -100%);

//   transition: transform ${(props) => props.duration}ms;

//   border-top-style: solid;
//   border-top-width: 1px;
// `;

// const StyledTab = styled.li`
//   flex: 1;
//   height: 100%;

//   button {
//     cursor: pointer;
//     transition: color 0.3s;
//     color: ${(props) => (props.isFocused ? "#000" : "#777")};
//     border: none;
//     width: 100%;
//     height: 100%;

//     background-color: rgba(0, 0, 0, 0);
//   }
// `;

// const Tab = ({ title, onClick, isFocused }) => {
//   return (
//     <StyledTab onClick={onClick} isFocused={isFocused}>
//       <button>{title}</button>
//     </StyledTab>
//   );
// };

// const StyledTabs = styled.div`
//   position: relative;
//   list-style: none;
//   height: 30px;
//   ${s.row}
// `;

// const Tabs = ({ focusedIdx, children, onChange, duration = 300 }) => {
//   return (
//     <StyledTabs>
//       {React.Children.map(children, (child, i) =>
//         React.cloneElement(child, {
//           key: i,
//           isFocused: focusedIdx === i,
//           onClick: (e) => {
//             onChange(i);
//           }
//         })
//       )}
//       <StyledTabIndicator
//         duration={duration}
//         tabCount={children.length}
//         offset={`${100 * focusedIdx}%`}
//       />
//     </StyledTabs>
//   );
// };
// const StyledOuterSliders = styled.div`
//   overflow: hidden;
// `;
// const StyledSliders = styled.div`
//   display: flex;
//   flex-wrap: no-wrap;
//   width: 100%;

//   transform: translateX(${(props) => `${props.offset}%`});
//   transition: transform ${(props) => props.duration}ms;

//   div {
//     flex-shrink: 0;
//     width: 100%;
//   }
// `;

// const Sliders = ({ focusedIdx, children, duration = 300 }) => {
//   const offset = -100 * focusedIdx;

//   return (
//     <StyledOuterSliders>
//       <StyledSliders offset={offset} duration={duration}>
//         {children}
//       </StyledSliders>
//     </StyledOuterSliders>
//   );
// };

// const Pane1 = () => {
//   return <div>
  
//   <div id="exhibition" className="tabcontent text-white">
//             <div className="tab-content-wrapper absolute">
//             <h3 className="tab-content-hdng font-worksans font-extrabold font-extrabold-2">SHOWCASE YOUR BUSINESS</h3>
//             <p className="tab-content-desc font-worksans">To IT Industry Leaders And Investors Of The Silicon Valley. The Wanz Tech Expo Offers The Perfect Platform To Launch New Initiatives And Associate Your Brand With Cutting-Edge IT Technology.</p>
//             </div>
//           </div>
//   </div>;
// };
// const Pane2 = () => {
//   return <div>

// <div id="exhibition" className="tabcontent text-white">
//             <div className="tab-content-wrapper absolute">
//             <h3 className="tab-content-hdng font-worksans font-extrabold font-extrabold-2">SHOWCASE YOUR BUSINESS</h3>
//             <p className="tab-content-desc font-worksans">To IT Industry Leaders And Investors Of The Silicon Valley. The Wanz Tech Expo Offers The Perfect Platform To Launch New Initiatives And Associate Your Brand With Cutting-Edge IT Technology.</p>
//             </div>
//           </div>
//   </div>;
// };
// const Pane3 = () => {
//   return <div>
//      <div id="exhibition" className="tabcontent text-white">
//             <div className="tab-content-wrapper absolute">
//             <h3 className="tab-content-hdng font-worksans font-extrabold font-extrabold-2">SHOWCASE YOUR BUSINESS</h3>
//             <p className="tab-content-desc font-worksans">To IT Industry Leaders And Investors Of The Silicon Valley. The Wanz Tech Expo Offers The Perfect Platform To Launch New Initiatives And Associate Your Brand With Cutting-Edge IT Technology.</p>
//             </div>
//           </div>
//   </div>;
// };

// export  function TabsSlider() {
//   const [focusedIdx, setFocusedIdx] = React.useState(0);

//   return (
//     <div className="Apppps">
//       <div>
//       <Tabs focusedIdx={focusedIdx} onChange={setFocusedIdx}>
//         <Tab title="tab1" />
//         <Tab title="tab2" />
//         <Tab title="tab3" />
//       </Tabs>
//       </div>
//      <div>
//      <Sliders focusedIdx={focusedIdx}>
//         <Pane1 />
//         <Pane2 />
//         <Pane3 />
//       </Sliders>
//      </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";

// export  function TabsSlider() {
//   const [currentTab, setCurrentTab] = useState('1');
//     const tabs = [
//         {
//             id: 1,
//             tabTitle: 'CROWD ENGAGEMENT',
//             title: 'Title 1',
//             content: "https://techexpo-ncksai47n-avriomutahir.vercel.app/_next/static/media/exhibition.61dc5a41.png"
//         },
//         {
//             id: 2,
//             tabTitle: 'CROWD ENGAGEMENT',
//             title: 'Title 2',
//             content: "https://techexpo-ncksai47n-avriomutahir.vercel.app…ext/static/media/networkbusinessoppo.181b619c.jpg"
//         },
//         {
//             id: 3,
//             tabTitle: '',
//             title: 'Title 3',
//             content: "https://techexpo-ncksai47n-avriomutahir.vercel.app…ext/static/media/networkbusinessoppo.181b619c.jpg"
//         },
       
//     ];

//     const handleTabClick = (e) => {
//         setCurrentTab(e.target.id);
//     }
//   return (
//     <div className='container tabstabs pt-30'>
//     <div className='tabs'>
//         {tabs.map((tab, i) =>
//             <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
//         )}
//     </div>
//     <div className="w-full ml-auto">
//     <div className='content w-full'>
//         {tabs.map((tab, i) =>
//             <div key={i}>
//                 {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p>{tab.content}</p></div>}
//             </div>
//         )}
//     </div>
//     </div>
    
// </div>
//   )
// }



import React,{useState} from "react";
export  function TabsSlider() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap offer-tab-section">
        <div className="w-full">
        <h2 className="font-worksans  font-extrabold text-white tab-hndg">WHAT WE OFFER</h2>
          <ul
            className="flex mb-0 list-none  pt-1 pb-2 md:flex-row flex-col md:gap-2"
            role="tablist"
          >
            {/* flex-wrap */}
            <li className="">
              <a
                className={
                  "text-xs font-bold uppercase leading-normal " +
                  (openTab === 1
                    ? "text-data_orange border-b-2 border-data_orange bg-blueGray-600"
                    : "text-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
               EXHIBITION
              </a>
            </li>
            <li className="">
              <a
                className={
                  "text-xs font-bold uppercase leading-normal " +
                  (openTab === 2
                    ? "text-data_orange border-b-2 border-data_orange bg-blueGray-600"
                    : "text-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
              EVENT MANAGEMENT
              
              </a>
            </li>
            <li className="">
              <a
                className={
                  "text-xs font-bold uppercase   leading-normal " +
                  (openTab === 3
                    ? "text-data_orange border-b-2 border-data_orange bg-blueGray-600"
                    : "text-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 SHOWCASE YOUR BUSINESS
              </a>
            </li>
          </ul>
          <div className=" flex flex-col min-w-0 break-words w-full mb-6 rounded">
            <div className=" flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div id="exhibition" className="tabcontent text-white">
            <div className="tab-content-wrapper lg:-ml-12 md:-ml-1 pt-8  absoulte  ">
            <h3 className="tab-content-hdng font-worksans font-extrabold font-extrabold-2"> EXHIBITION</h3>
            <p className="tab-content-desc font-worksans">To IT Industry Leaders And Investors Of The Silicon Valley. The Wanz Tech Expo Offers The Perfect Platform To Launch New Initiatives And Associate Your Brand With Cutting-Edge IT Technology.</p>
            </div>
          </div>
              </div>  
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div id="exhibition2" className="tabcontent text-white">
            <div className="tab-content-wrapper  lg:-ml-12 md:-ml-1 pt-8 absoulte  ">
            <h3 className="tab-content-hdng font-worksans font-extrabold font-extrabold-2">  EVENT MANAGEMENT</h3>
            <p className="tab-content-desc font-worksans">To IT Industry Leaders And Investors Of The Silicon Valley. The Wanz Tech Expo Offers The Perfect Platform To Launch New Initiatives And Associate Your Brand With Cutting-Edge IT Technology.</p>
            </div>
          </div>

                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div id="exhibition3" className="tabcontent text-white">
            <div className="tab-content-wrapper lg:-ml-12 md:-ml-1  pt-8 absoulte  ">
            <h3 className="tab-content-hdng font-worksans font-extrabold font-extrabold-2">SHOWCASE YOUR BUSINESS</h3>
            <p className="tab-content-desc font-worksans">To IT Industry Leaders And Investors Of The Silicon Valley. The Wanz Tech Expo Offers The Perfect Platform To Launch New Initiatives And Associate Your Brand With Cutting-Edge IT Technology.</p>
            </div>
          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
