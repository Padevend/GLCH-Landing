import img01 from "../assets/image/img01.jpg";
import img02 from "../assets/image/img02.jpg";
import img04 from "../assets/image/img04.jpg";
import img05 from "../assets/image/img05.jpg";

// import icon
import assistanceIcon from "../assets/icon/assistance.png";
import healthcareIcon from "../assets/icon/healthcare.png";
import heartIcon from "../assets/icon/heart.png";
import responsibilityIcon from "../assets/icon/responsibility.png";

import { Sparkles, Award, HeartHandshake, Users } from "lucide-react";


var Abouts = [
  {
    title: "Mutual assistance",
    content: `It is a meeting of all people of good faith, altruists, honesty and
                    compassionate in a salt aim to help each other in matters of health in the aspects 
                    social, financial and moral. a community of mutual help between members facilitates
                    access to care for all.`,
    cover: img02,
  },
  {
    title: "Optimal monitoring",
    content: `the association takes care of monitoring all its members and establishing a relationship of trust 
                    with its latest to help them better understand their state of health and the conditions in 
                    which they are located for the best possible treatment.`,
    cover: img05,
  },
  {
    title: "Health promotion",
    content: `Through the concept of "social medicine" the body aims to create a framework of solidarity
                    and culture within society to enable everyone to be aware of health and 
                    its assets for the foundation of a brighter future.`,
    cover: img04,
  },
  {
    title: "Innovation",
    content: `Although the aim is a cultural environment it is not to neglect technological progress
                    in the field of medicine, so the objective will also be to master these technologies
                    within traditional societies to overcome situations in which the usual techniques are
                    ineffective.`,
    cover: img01,
  },
];

var services = [
  {
    icon: healthcareIcon,
    name: "Medical Assistance",
    description: "emergency, laboratory, screening, specialists",
  },
  {
    icon: responsibilityIcon,
    name: "Social assistance",
    description: "nutrition, sport, mental",
  },
  {
    icon: assistanceIcon,
    name: "Financial assistance",
    description:
      "For the most deprived, an aid solution will be offered to them",
  },
  {
    icon: heartIcon,
    name: "Health Care Coverage",
    description: "Patients are fully supported during their treatment",
  },
];

const Prices = [
  {
    name: "FREE MEMBER",
    price: "0",
    features: ["Community newsletter", "Health awareness alerts", "Public seminars access"],
    isPopular: false,
    icon: Users
  },
  {
    name: "ACTIVE MEMBER",
    price: "10,000",
    features: ["Standard health card", "Mutual assistance fund", "Primary care priority", "Voting rights"],
    isPopular: true,
    icon: Award
  },
  {
    name: "HONORARY MEMBER",
    price: "50,000",
    features: ["Gold health card", "Full primary care coverage", "Executive meetings access", "Recognition plaque"],
    isPopular: false,
    icon: Sparkles
  },
  {
    name: "DONOR",
    price: "+ 50,000",
    features: ["Philanthropist status", "Named health projects", "Annual impact report", "Life-long recognition"],
    isPopular: false,
    icon: HeartHandshake
  }
];

var faqs = [
  {
    question: "Why become a member?",
    answer: `By becoming a member of the Grand Luc community, you benefit from full support from the community, 
                    taking into account your financial means and other parameters. You have the opportunity to share with other 
                    community members and more. Upon registration, you receive a membership number and a membership 
                    card valid for one year, allowing you access to all services provided by the community.`,
  },
  {
    question: "Who can become a member?",
    answer: `The community is open to anyone who wishes to join, whether they are already sick or want to prevent illness. 
                    This applies regardless of age, whether they are children, adolescents, or adults. Everyone will receive 
                    appropriate treatment.`,
  },
  {
    question: "How to become a member?",
    answer: `To become a member of the community, simply fill out the registration form below with the requested information.
                    Once registered, you will receive confirmation and should visit a community focal point to collect your membership card.`,
  },
];

export { Abouts, services, Prices, faqs };
