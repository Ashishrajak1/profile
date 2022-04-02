import Card from "./Card.js";
import web from "./Photos/E.jpg";
import app from "./Photos/B.jpg";
import android from "./Photos/F.jpg";
import digital from "./Photos/G.jpg";
import marketting from "./Photos/I.jpg";
import software from "./Photos/H.jpg";

const sdata = [
  {
    imgsrc:web,
    title:"web development"
},
 {
  imgsrc:app,
  title:"app development"
},
 {
  imgsrc:software,
  title:"software  development"
},
 {
  imgsrc:digital,
  title:"digital marketing"
},
 {
  imgsrc:marketting,
  title:"marketting"
},
{
  imgsrc:android,
  title:"android development"
},


];



const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
           
           {
             sdata.map((val, ind)=>{
               return <Card  key={ind} imgsrc={val.imgsrc}  title={val.title}/>
             })
           }

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
