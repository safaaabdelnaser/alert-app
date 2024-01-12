import {ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
import { alertType } from "../../../Interface/alertType";
interface IProps {
  type: alertType;
  icon: ReactNode;
  title: string;
  desc?: string;
  children?:ReactNode
}
export const Alert = ({ type, icon, title, desc, children }: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="alert-title">
          <span>{icon}</span>
          <h3>{title}</h3>
        </div>
        <X style={{  cursor: "pointer" }} size={22} />
      </div>
      {children ? children:<p>{desc}</p>}
    </div>
  );
};
export default Alert;
