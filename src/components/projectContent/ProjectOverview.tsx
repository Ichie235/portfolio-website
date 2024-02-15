"use client";
import { blogData } from "../../../library/projects/blogProject/_blogData";
import { apartmentData } from "../../../library/projects/one7thapartment/_apartmentData";
import { avvicBankData } from "../../../library/projects/avvicBankProject/_avvicBankData";
import { ecommerceData } from "../../../library/projects/ecommerceProject/_ecommerceData";

type ProjectOverviewProps = {
  projectName: string;
};
const ProjectOverview: React.FC<ProjectOverviewProps> = ({ projectName }) => {
  if (projectName === "blog-wesite") {
    const blogItem = blogData.find((item) => item.id === "1");
    if (blogItem) {
      return (
        <>
          <p className="text-base md:text-lg md:px-4 ">{blogItem.paragraph1}</p>
        </>
      );
    } 
  } else if (projectName ==="one7thapartment") {
    const apartmentItem = apartmentData.find((item) => item.id === "1");
    if (apartmentItem) {
      return (
        <>
          <p className="text-base md:text-lg md:px-4 ">{apartmentItem.paragraph1}</p>
        </>
      );
    }
  } else if (projectName === "avvic-bank") {
    const avvicBankDataItem = avvicBankData.find((item) => item.id === "1");
    if (avvicBankDataItem) {
      return (
        <>
          <p className="text-base md:text-lg md:px-4 ">{avvicBankDataItem.paragraph1}</p>
        </>
      );
    }
  } else if (projectName === "ecommerce") {
    const ecommerceDataItem = ecommerceData.find((item) => item.id === "1");
    if (ecommerceDataItem) {
      return (
        <>
          <p className="text-base md:text-lg md:px-4 ">{ecommerceDataItem.paragraph1}</p>
          <p className="text-base md:text-lg md:px-4 ">{ecommerceDataItem.paragraph2}</p>
        </>
      );
    }
  } else {
    return <li className="">hello world</li>;
  }
};

export default ProjectOverview;
