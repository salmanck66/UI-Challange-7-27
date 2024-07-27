import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faDesktop,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="profile gird justify-center items-center ps-10 pt-6">
      <div className="grid justify-items-center gap-4">
        <div className="">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src="https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwYm95fGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <div className="text-xl font-bold">Sahal VV</div>
        <div className="grid text-center">
          <span>Supervisor</span>
          <span>Selfstack</span>
        </div>
        <div className="text-center bg-zinc-300 rounded-md px-24 py-1 cursor-pointer">
          Edit Profile
        </div>
      </div>

      <div className="pt-5">
        <div className=" grid gap-3 py-2">
          <div>
            <span className="text-xl font-bold">Perfomance</span>
          </div>
          <div>

            <div className="flex justify-between">

              <div className="">
                {" "}
                <FontAwesomeIcon icon={faChartSimple} />
              </div>
              <div className="ms-2">Perfomance analysis</div>
              <div></div>
              <div className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>



            <div className="flex">
              <div className="">
                {" "}
                <FontAwesomeIcon icon={faDesktop} />
              </div>
              <div className="ms-2">Video analysis</div>
              <div className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>

        <div className=" grid gap-3 py-2">
          <div>
            <span className="text-xl font-bold">Wealth & Wellness</span>
          </div>
          <div>
            <div className="flex">
              <div className="">
                {" "}
                <FontAwesomeIcon icon={faChartSimple} />
              </div>
              <div className="ms-2">Perfomance analysis</div>
              <div className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="flex">
              <div className="">
                {" "}
                <FontAwesomeIcon icon={faDesktop} />
              </div>
              <div className="ms-2">Video analysis</div>
              <div className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid gap-3 py-2">
          <div>
            <span className="text-xl font-bold">Perfomance</span>
          </div>
          <div>
            <div className="flex">
              <div className="">
                {" "}
                <FontAwesomeIcon icon={faChartSimple} />
              </div>
              <div className="ms-2">Perfomance analysis</div>
              <div className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="flex">
              <div className="">
                {" "}
                <FontAwesomeIcon icon={faDesktop} />
              </div>
              <div className="ms-2">Video analysis</div>
              <div className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>


        <div className=" grid gap-3 py-2">
          <div>
            <span className="text-xl font-bold">health & Wellness</span>
          </div>
          <div>
            <div className="flex">
              <div className="">
                {" "}
                <FontAwesomeIcon icon={faChartSimple} />
              </div>
              <div className="ms-2">Perfomance analysis</div>
              <div className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="flex">
              <div className="">
                {" "}
                <FontAwesomeIcon icon={faDesktop} />
              </div>
              <div className="ms-2">Video analysis</div>
              <div className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Sidebar;
