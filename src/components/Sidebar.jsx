import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiJavascript } from "react-icons/si";
import MyImage from "../data/js.png";
import linkedin from "../data/linkedin.png";
import twitter from "../data/twitter.png";
import github from "../data/github.png";
import copyright from "../data/copyright.png";

import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
	const { activeMenu, setActiveMenu, screenSize } = useStateContext();
	const handleCloseSideBar = () => {
		if (activeMenu && screenSize <= 900) {
			setActiveMenu(false);
		}
	};

	const activeLink =
		"flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 ";
	const normalLink =
		"flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-white dark:text-gray-200  hover:bg-blue-900	 m-2";

	// className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-[#0F274F] "
	return (
		<div>
			{activeMenu && (
				<>
					<div
						className="flex justify-between
        items-center"
					>
						{/* className="h-[60px] bg-[#4FA1F6] w-[360px] md:overflow-hidden overflow-auto md:hover:overflow-auto pb-2 " */}

						<div
							className="bg-[#4FA1F6]      
           w-[360px] md:overflow-hidden md:hover:overflow-auto pb-2 overflow-y-auto h-[60px] ..."
						>
							<Link
								to="/"
								onClick={handleCloseSideBar}
								className="items-center gap-4 ml-7
          mt-3.5 flex text-xl font-extrabold tracking-tight 
           dark:text-white  text-white "
							>
								<img src={MyImage} type="js.png" />{" "}
								<span className="text-2xl">dojo</span>
								<div>
									<TooltipComponent content="Menu" position="BottomCenter">
										<button
											type="button"
											onClick={() =>
												setActiveMenu((prevActiveMeu) => !prevActiveMeu)
											}
											className="text-xl rounded-r-full ml-48 
              flex-end block md:hidden"
										>
											<MdOutlineCancel />
										</button>
									</TooltipComponent>
								</div>
							</Link>
							{/* w-[360px] h-[1024px] fixed sidebar dark:bg-secondary-dark-bg bg-[#0F274F] */}
						</div>
					</div>
					<div className="mt-11">
						{links.map((item) => (
							<div key={item.title}>
								<p className="text-white mr-0 flex p-[17px] divide-y-reverse bg-[#163975] gap-3  titlecase ">
									{item.image}
									{item.title}
								</p>
								{item.links.map((link) => (
									<NavLink
										to={`/${link.name}`}
										key={link.name}
										style={{ color: "#FFFFFF" }}
										onClick={handleCloseSideBar}
										className={({ isActive }) =>
											isActive ? activeLink : normalLink
										}
									>
										{" "}
										{link.image}
										{link.title}
										{link.icon}
										<span className="capitalize ">
											{link.name}
											{link.border}
										</span>
										<button type="button" onClick={() => {}} className="ml-14">
											{link.icon1}
										</button>
										<button
											type="button"
											onClick={() => {}}
											className="flex-end ml-12"
										>
											{link.icon2}
										</button>
									</NavLink>
								))}
							</div>
						))}
					</div>
					<border1
						style={{
							border: "1px solid rgba(231, 234, 238, 0.2)",
							position: "absolute",
							width: "360px",
							height: "0px",
							left: "0px",
							top: "220px",
						}}
					></border1>
					<border2
						style={{
							position: "absolute",
							width: "360px",
							height: "0px",
							left: "0px",
							top: "270px",

							border: "1px solid rgba(231, 234, 238, 0.2)",
						}}
					/>

					<border3
						style={{
							position: "absolute",
							width: "360px",
							height: "0px",
							left: "0px",
							top: "326px",

							border: "1px solid rgba(231, 234, 238, 0.2)",
						}}
					/>

					<border4
						style={{
							position: "absolute",
							width: "360px",
							height: "0px",
							left: "0px",
							top: "380px",

							border: "1px solid rgba(231, 234, 238, 0.2)",
						}}
					/>

					<border5
						style={{
							position: "absolute",
							width: "360px",
							height: "0px",
							left: "0px",
							top: "430px",

							border: "1px solid rgba(231, 234, 238, 0.2)",
						}}
					/>

					<border6
						style={{
							position: "absolute",
							width: "360px",
							height: "0px",
							left: "0px",
							top: "489px",
							border: "1px solid rgba(231, 234, 238, 0.2)",
						}}
					/>

					<div>
						<border7
							style={{
								/* Line 5 */
								position: "absolute",
								width: "360px",
								height: "0px",
								left: "0px",
								top: "700px",
								border: "1px solid rgba(231, 234, 238, 0.2)",
							}}
						/>

						<button
							type="button"
							style={{
								position: "fixed",
								left: "0.7%",
								right: "89%",
								top: "95%",
								bottom: "1.25%",
							}}
						>
							<img src={linkedin} type="linkedin.png" />
						</button>

						<button
							type="button"
							style={{
								position: "fixed",
								left: "3.8%",
								right: "89%",
								top: "95%",
								bottom: "1.25%",
							}}
						>
							<img src={twitter} type="twitter.png" />
						</button>
					</div>
					<button
						type="button"
						style={{
							position: "fixed",
							left: "6.9%",
							right: "89%",
							top: "95%",
							bottom: "1.25%",
						}}
					>
						<img src={github} type="github.png" />
					</button>

					<span
						className=""
						style={{
							position: "fixed",
							left: "%",
							right: "80%",
							top: "95.7%",
							bottom: "1.25%",
						}}
					>
						<img src={copyright} type="copyright.png" />
					</span>
					<text
						style={{
							width: "px",
							position: "fixed",
							left: "20.3%",
							// right:'75%',
							top: "95.4%",
							bottom: "1.25%",
							fontfamily: "Lato",
							fontstyle: "normal",
							fontweight: "100",
							fontsize: "2px",
							lineheight: "10px",

							color: "#A7AFB9",
						}}
					>
						2022
					</text>
				</>
			)}
		</div>
	);
};

export default Sidebar;
