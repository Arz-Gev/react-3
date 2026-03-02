import React, { useContext } from "react";
import { globalContext } from "../context/ContextProvider";
import DashboardCard from "./DashboardCard";
import {
  CircleCheckBig,
  Clock,
  User,
  Mail,
  Calendar,
  Activity,
  TrendingUp,
} from "lucide-react";

import "./Dashboard.css";

export default function Dashboard() {
  const { sharedData } = useContext(globalContext);

  if (!sharedData.logged) {
    return <></>;
  }

  const cards = [
    {
      id: 0,
      title: "Profile",
      iconBig: <User />,
      className: "blue",
      name: sharedData.userData.name,
      iconSmall: <CircleCheckBig className="icon-body" />,
      status: "Active user",
    },
    {
      id: 1,
      title: "Email",
      iconBig: <Mail />,
      className: "orange",
      name: sharedData.userData.email,
      iconSmall: <CircleCheckBig className="icon-body" />,
      status: "Verified account",
    },
    {
      id: 2,
      title: "Last Login",
      iconBig: <Calendar />,
      className: "green",
      name: "Today",
      iconSmall: <Clock className="icon-body" />,
      status: "Session active",
    },
  ];

  return (
    <div className="dashBoard-contaier">
      <div className="cards-container">
        {cards.map((card) => (
          <DashboardCard
            key={card.id}
            title={card.title}
            iconBig={card.iconBig}
            className={card.className}
            name={card.name}
            iconSmall={card.iconSmall}
            status={card.status}
          />
        ))}
      </div>
      <div className="acitvity-container">
        <div className="acitvity-top">
          <span className="activity-icon">
            <Activity />
          </span>
          <h3>Recent Activity</h3>
        </div>
        <p className="description">Your recent dashboard activities</p>
        <div className="status-log green-log">
          <span className="point green-point"></span>
          <div className="log-info">
            <h5>Successfully logged in</h5>
            <p className="info-small">
              <Clock className="icon-body icon-body-black" />
              Just now
            </p>
          </div>
          <TrendingUp className="log-icon-green" />
        </div>
        <div className="status-log blue-log">
          <span className="point blue-point"></span>
          <div className="log-info">
            <h5>Dashboard accessed</h5>
            <p className="info-small">
              <Clock className="icon-body icon-body-black" />
              Just now
            </p>
          </div>
          <Activity className="log-icon-blue" />
        </div>
      </div>
    </div>
  );
}
