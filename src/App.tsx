import { Alert } from "./Components/UI/AlertLayout/Alert";
import {
  AlertCircle,
  BookCheck,
  CheckCircle,
  ShieldAlert,
  ShieldX,
} from "lucide-react";
function App() {
  return (
    <>
      <Alert
        type={"Default"}
        icon={<ShieldAlert size={20} />}
        title={"Default Alert"}
        desc={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci vero sed, placeat in odit, ullam dolorem quisquam est magni enim excepturi! Consequuntur soluta fugit maxime vel dolore maiores laboriosam."
        }
      />
      <Alert
        type={"Info"}
        icon={<CheckCircle size={20} />}
        title={"Info Alert"}
      >
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            adipisci vero sed, placeat in odit, ullam dolorem{" "}
            <a href="/">quisquam</a> est magni enim excepturi! Consequuntur
            soluta fugit maxime vel dolore maiores laboriosam.
          </p>
        </div>
      </Alert>
      <Alert
        type={"Warning"}
        icon={<AlertCircle size={20} />}
        title={"Warning Alert"}
        desc={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci vero sed, placeat in odit, ullam dolorem quisquam est magni enim excepturi! Consequuntur soluta fugit maxime vel dolore maiores laboriosam."
        }
      />
      <Alert
        type={"Success"}
        icon={<BookCheck size={20} />}
        title={"Success Alert"}
        desc={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci vero sed, placeat in odit, ullam dolorem quisquam est magni enim excepturi! Consequuntur soluta fugit maxime vel dolore maiores laboriosam."
        }
      />
      <Alert
        type={"Error"}
        icon={<ShieldX size={20} />}
        title={"Error Alert"}
        desc={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci vero sed, placeat in odit, ullam dolorem quisquam est magni enim excepturi! Consequuntur soluta fugit maxime vel dolore maiores laboriosam."
        }
      />
    </>
  );
}

export default App;
