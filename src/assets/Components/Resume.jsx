import { Divider, Grid } from "@mui/material";
import React from "react";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Resume = () => {
  return (
    <div className="pt-24">
      <div className="w-full text-center mb-12">
        <p className="text-5xl font-bold ">Resume</p>
      </div>
      <Grid container spacing={4} alignItems="center">
        <Grid item lg={4}>
          <div className="">
            <img src="/Purple Space Astronaut.png" />
          </div>
        </Grid>

        <Grid item lg={8}>
          <div className="rounded-xl border-purple border-2 px-4 py-4 shadow-md hover:shadow-purple/70">
            <div className="rounded-xl border-yellow border-2 w-10 h-10 flex items-center justify-center mb-2">
              <HowToRegOutlinedIcon />
            </div>
            <p className="font-semibold text-xl mb-2 ">Professional Sumamary</p>
            <p className="text-gray-dark">
              Result-driven and motivated Frontend Web Developer with a passion
              for creating engaging and user-centric web experiences. Proficient
              in frontend technologies including React.js, HTML, CSS, and
              JavaScript, with a strong emphasis on UI/UX design principles.
              Experienced in developing responsive and visually appealing
              websites, optimizing for performance and accessibility. Capable of
              working independently to achieve project objectives, while also
              open to collaboration and feedback from colleagues. Dedicated
              problem-solver with a keen eye for detail and a drive for
              continuous learning and improvement in the rapidly evolving field
              of web development.
            </p>
          </div>
        </Grid>

        <Grid item xs={12} lg={12}>
          <div className="rounded-xl border-purple border-2 px-4 py-4 shadow-md hover:shadow-purple/70">
            <div className="rounded-xl border-yellow border-2 w-10 h-10 flex items-center justify-center mb-2">
              <AutoAwesomeOutlinedIcon fontSize="small" />
            </div>
            <p className="font-semibold text-xl mb-2">Work Experience</p>
            <p className="text-gray-dark">Lorem Ipsa</p>
            <Divider
              sx={{
                bgcolor: "purple.main",
                height: "2px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-lg mb-2">
                      Associate Frontend Web Developer
                    </p>
                    <div className="flex items-center gap-1 rounded-lg border-gray border-2 py-1 px-2">
                      <CalendarMonthIcon
                        sx={{
                          color: "gray.dark",
                          fontSize: "16px",
                        }}
                      />
                      <p className="text-sm text-gray-dark">
                        Oct 2023 - Present
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      <ApartmentIcon
                        sx={{ fontSize: "16px", color: "darkgray", ml: '3px' }}
                      />
                      <p className="text-gray-dark text-sm">
                        Modernize Tech Insights - Full Time
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      <LocationOnIcon
                        sx={{ fontSize: "16px", color: "darkgray", ml: '3px' }}
                      />
                      <p className="text-gray-dark text-sm">
                        Phnom Penh, Cambodia
                      </p>
                    </div>
                  </div>
                  <StyledListText
                    text="Played a pivotal role in the development of an extensive ERP
                    system tailored to meet the needs of diverse businesses and
                    companies."
                  />
                  <StyledListText
                    text="Spearheaded the design and implementation of critical
                    modules, notably the Customer Relationship Management (CRM)
                    and Media Library modules."
                  />
                  <StyledListText text="Utilized frontend development expertise to design, develop, and optimize user interfaces for critical modules, including the Customer Relationship Management (CRM) and Media Library modules. " />
                  <div>
                    <p className="font-semibold text-md mt-2 mb-2">
                      Customer Relationship Management (CRM) Module:
                    </p>
                    <StyledListText
                      text="Designed and crafted UI components for the CRM module using React.js in conjunction with
                      Material-UI, leveraging extensive customization features to meet company requirements."
                    />
                    <StyledListText
                      text="Implemented responsive layouts across various devices, ensuring optimal user experience
                      and accessibility."
                    />
                    <StyledListText
                      text=" Employed recharts for data visualization, enabling dynamic charting functionalities to
                      visualize key metrics and insights."
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-md mt-2 mb-2">
                      Media Library Module:
                    </p>
                    <StyledListText
                      text="Led the development efforts for the Media Library module, introducing features for media
                      management, upload functionality, folder organization, and image editing."
                    />
                    <StyledListText
                      text="Utilized React.js and Material-UI to create intuitive and user-friendly interfaces, prioritizing
                      performance and scalability."
                    />
                    <StyledListText
                      text="Leveraged existing codebase where applicable, while developing new components and
                      layouts from scratch to fulfill unique module requirements."
                    />
                  </div>
                </TimelineContent>
              </TimelineItem>

              <StyledTimelineContent
                title="Associate Social Media Assistant"
                workDuration=" May 2023 - Oct 2023"
                company="E-school - Digital House KPS"
                companyLocation="Kompong Speu, Cambodia"
                firstDescription="Formulated and executed comprehensive social media strategies aimed at augmenting
                brand visibility and fostering audience engagement."
                secondDescription="Utilized advanced analytics tools to meticulously track and evaluate social media
                performance metrics."
                thirdDescription=" Oversaw and optimized advertising campaigns, ensuring alignment with strategic objectives
                and maximizing ROI."
              />

              <StyledTimelineContent
                title=" Social Media Manager Assistant - Volunteer"
                workDuration="Oct 2022 - May 2023"
                company=" Tzone Property"
                companyLocation="Phnom Penh, Cambodia"
                firstDescription="Developed and scheduled engaging social media content to align with strategic objectives
                and target audience preferences."
                secondDescription="Acquired proficiency in utilizing various social media management tools to streamline
                content creation, scheduling, and performance tracking."
                thirdDescription="Conducted thorough research to identify emerging trends and best practices in social media
                marketing, applying insights to inform content creation and campaign strategies."
              />
            </Timeline>
          </div>
        </Grid>

        <Grid item xs={12} lg={12}>
          <div className="rounded-xl border-purple border-2 px-4 py-4 shadow-md hover:shadow-purple/70">
            <div className="rounded-xl border-yellow border-2 w-10 h-10 flex items-center justify-center mb-2">
              <AutoAwesomeOutlinedIcon fontSize="small" />
            </div>
            <p className="font-semibold text-xl mb-2">Education</p>
            <p className="text-gray-dark">Lorem Ipsa</p>
            <Divider
              sx={{
                bgcolor: "purple.main",
                height: "2px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <StyledTimelineContent
                title="Bachelor of Science in Computer Science"
                workDuration="Expected Grad: Aug 2025 "
                company="Royal University of Phnom Penh(RUPP)"
                companyLocation="Phnom Penh, Cambodia"
                firstDescription=" Designing Websites: Crafting Web Interfaces"
                secondDescription="Structuring Data: Organizing Information Structures"
                thirdDescription="Implementing Algorithms: Executing Computational Procedures"
              />
              <StyledTimelineContent
                title="Secondary Education"
                workDuration="Graduated 2021"
                company="Beltei International School"
                companyLocation="Phnom Penh, Cambodia"
                firstDescription="Actively participated in speaking and writing competitions"
                secondDescription=" Successfully completed coursework in both Khmer and English language "
                thirdDescription="Developed proficient ICT skills, particularly in Microsoft Office suite"
              />
            </Timeline>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Resume;

const StyledTimelineContent = ({
  title,
  workDuration,
  company,
  companyLocation,
  firstDescription,
  secondDescription,
  thirdDescription,
}) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg mb-2">{title}</p>
          <div className="flex items-center gap-1 rounded-lg border-gray border-2 py-1 px-2">
            <CalendarMonthIcon
              sx={{
                color: "darkgray",
                fontSize: "16px",
              }}
            />
            <p className="text-sm text-gray-dark">{workDuration}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <div className="flex items-center gap-1">
            <ApartmentIcon sx={{ fontSize: "15px", color: "darkgray", ml: '3px' }} />
            <p className="text-gray-dark text-sm">{company}</p>
          </div>

          <div className="flex items-center gap-1">
            <LocationOnIcon sx={{ fontSize: "15px", color: "darkgray", ml: '3px' }} />
            <p className="text-gray-dark text-sm">{companyLocation}</p>
          </div>
        </div>
        <StyledListText 
          text={firstDescription}
        />
        <StyledListText 
          text={secondDescription}
        />
        <StyledListText 
          text={thirdDescription}
        />
      </TimelineContent>
    </TimelineItem>
  );
};

const StyledListText = ({ text }) => {
  return (
    <div className="flex">
      <p className="text-gray-dark text-sm ml-1.5">
        •
      </p>
      <p className="ml-[9px] text-gray-dark text-sm">{text}</p>
    </div>
  );
};
