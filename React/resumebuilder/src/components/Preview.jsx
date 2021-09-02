import "./css/preview.css";
import "./css/template.css";
import { useSelector } from "react-redux";

let Preview = () => {
  let { fname, lname, city, state, phone, email, year, degree, college, cgpa } =
    useSelector((state) => state.details);
  let template = useSelector((state) => state.template);
  console.log(template);
  return (
    <div className="preview-container">
      {template === "A" ? (
        <svg
          version="1.1"
          className="svg"
          baseProfile="full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="5 0 614 858"
          styles={{ margin_auto: 0, backgroundImage: 'url("img/svg-6.jpg")' }}
        >
          <rect
            styles={{
              fill: "#449cff",
              x: "19",
              y: "37",
              width: "70",
              height: "70",
            }}
          ></rect>

          <text x="62" y="92" class="text-icon">
            <tspan x="33" y="82" class="text-cap">
              {fname.charAt(0) + " " + lname.charAt(0)}
            </tspan>
          </text>

          <text x="92" y="32" class="h1">
            <tspan xmlns="http://www.w3.org/2000/svg" x="106" y="80">
              {" "}
              {fname + " " + lname}{" "}
            </tspan>
          </text>

          <text x="100" y="100" class="p3">
            <tspan x="106" y="104">
              {city + " " + state + " " + phone + " " + email}{" "}
            </tspan>
          </text>

          <text x="22" y="174" class="h2">
            PROFESSIONAL SUMMARY
          </text>

          <text x="194" y="172" class="p2">
            Successful sales professional with 10+ years experience in
            large-scale food and retail environments.
          </text>
          <text x="194" y="188" class="p2">
            {" "}
            Implement cost control measures to ensure operations remain within
            company targets. Maximize
          </text>
          <text x="194" y="204" class="p2">
            bottom-line performance through PL, merchandising, staff management,
            loss control and inventory
          </text>
          <text x="194" y="224" class="p2">
            management.
          </text>

          <text x="22" y="282" class="h2">
            SKILLS
          </text>

          <circle cx="195" cy="275" r="1.5" class="li-disc"></circle>
          <circle cx="195" cy="292" r="1.5" class="li-disc"></circle>
          <circle cx="195" cy="308" r="1.5" class="li-disc"></circle>
          <circle cx="195" cy="326" r="1.5" class="li-disc"></circle>

          <text x="210" y="278" class="p2">
            Executive team leadership
          </text>
          <text x="210" y="295" class="p2">
            Inventory report generation
          </text>
          <text x="210" y="311" class="p2">
            Client/Vendor relations
          </text>
          <text x="210" y="329" class="p2">
            Market analysis
          </text>

          <circle cx="384" cy="275" r="1.5" class="li-disc"></circle>
          <circle cx="384" cy="292" r="1.5" class="li-disc"></circle>
          <circle cx="384" cy="308" r="1.5" class="li-disc"></circle>
          <circle cx="384" cy="326" r="1.5" class="li-disc"></circle>

          <text x="402" y="278" class="p2">
            Sales management
          </text>
          <text x="402" y="295" class="p2">
            Staff training
          </text>
          <text x="402" y="311" class="p2">
            Customer relations
          </text>
          <text x="402" y="329" class="p2">
            Process Improvements
          </text>

          {/* <!--Core Qualification Section End--> */}

          <text x="22" y="390" class="h2">
            EXPERIENCE
          </text>

          <text x="195" y="388" class="subheding">
            August 2011-Current
          </text>
          <text x="195" y="402" class="subheding">
            District Manager
          </text>
          <text x="195" y="416" class="subheding">
            Verizon Wireless | San Francisco, CA
          </text>

          <g transform="translate(0 14)">
            <circle cx="195" cy="420" r="1" class="li-disc"></circle>
            <circle cx="195" cy="438" r="1" class="li-disc"></circle>
            <circle cx="195" cy="454" r="1" class="li-disc"></circle>
            <circle cx="195" cy="472" r="1" class="li-disc"></circle>
            <circle cx="195" cy="472" r="1" class="li-disc"></circle>

            <text x="24" y="380" class="p2">
              <tspan x="210" y="423">
                Directed recruitment/training/staff development initiatives.
              </tspan>
              <tspan x="210" y="441">
                Compute taxes owed and prepare tax returns, ensuring compliance
                with reporting.
              </tspan>
              <tspan x="210" y="457">
                Administered daily operations to ensure policies were adhered to
                by sales staff.
              </tspan>
              <tspan x="210" y="475">
                Cultivated strong business relationships with customers to drive
                business.
              </tspan>
            </text>
          </g>

          <text x="195" y="518" class="subheding">
            August 2005-2011
          </text>
          <text x="195" y="532" class="subheding">
            District Manager
          </text>
          <text x="195" y="546" class="subheding">
            Verizon Wireless | San Francisco, CA
          </text>

          <g transform="translate(0 30)">
            <circle cx="195" cy="532" r="1" class="li-disc"></circle>
            <circle cx="195" cy="550" r="1" class="li-disc"></circle>
            <circle cx="195" cy="568" r="1" class="li-disc"></circle>
            <circle cx="195" cy="586" r="1" class="li-disc"></circle>

            <text x="24" y="532" class="p2">
              <tspan x="210" y="535">
                Directed recruitment/training/staff development initiatives.
              </tspan>
              <tspan x="210" y="553">
                Compute taxes owed and prepare tax returns, ensuring compliance
                with reporting.
              </tspan>
              <tspan x="210" y="571">
                Administered daily operations to ensure policies were adhered to
                by sales staff.
              </tspan>
              <tspan x="210" y="589">
                Cultivated strong business relationships with customers to drive
                business.
              </tspan>
            </text>
          </g>

          <g transform="translate(0 25)">
            <text x="22" y="652" class="h2">
              EDUCATION
            </text>
            <text x="195" y="650" class="subheding">
              {year}
            </text>
            <text x="195" y="652" class="p2">
              <tspan x="195" y="668">
                {degree + "    " + cgpa}
              </tspan>
              <tspan x="195" y="684">
                {college}
              </tspan>
            </text>
          </g>
        </svg>
      ) : (
        //   next template
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          baseProfile="full"
          width="614"
          height="858"
          viewBox="45 20 624 858"
          styles={{ margin_auto: 0, backgroundImage: 'url("img/svg-4.jpg")' }}
        >
          <text x="92" y="32" class="H1">
            <tspan x="244" y="84">
              {fname}
              {" " + lname}
            </tspan>
          </text>

          <text x="9" y="92" class="P3">
            <tspan x="256" y="114">
              {email} | {phone}
            </tspan>
            <tspan x="274" y="130">
              {city + " " + state}
            </tspan>
          </text>

          <text x="273" y="174" class="H2">
            PROFESSIONAL SUMMARY
          </text>
          <line
            xmlns="http://www.w3.org/2000/svg"
            x1="94"
            y1="190"
            x2="614"
            y2="190"
            class="Line"
          />

          <text x="96" y="212" class="P2">
            Successful sales professional with 10+ years experience in
            large-scale food and retail environments. Implement cost
          </text>
          <text x="96" y="232" class="P2">
            control meameasures to ensure operations remain within company
            targets. Maximize bottom-line performance through
          </text>
          <text x="96" y="250" class="P2">
            PL, merchandising, staff management, loss control and inventory
            management. Successful sales professional with
          </text>
          <text x="96" y="272" class="P2">
            10+ years experience in large-scale food-and retail environments.
            Implement cost control measures to ensure opera-
          </text>
          <text x="96" y="290" class="P2">
            tions remain targets
          </text>

          <text x="328" y="332" class="H2">
            SKILLS
          </text>
          <line
            xmlns="http://www.w3.org/2000/svg"
            x1="94"
            y1="342"
            x2="614"
            y2="342"
            class="Line"
          />

          <circle cx="98" cy="362" r="1" class="Li-disc"></circle>
          <circle cx="98" cy="382" r="1" class="Li-disc"></circle>
          <circle cx="98" cy="402" r="1" class="Li-disc"></circle>
          <circle cx="98" cy="422" r="1" class="Li-disc"></circle>

          <text x="108" y="365" class="P2">
            Executive team leadership
          </text>
          <text x="108" y="385" class="P2">
            Inventory report generation
          </text>
          <text x="108" y="405" class="P2">
            Client/Vendor relations
          </text>
          <text x="108" y="425" class="P2">
            Market analysis
          </text>

          <circle cx="300" cy="362" r="1" class="Li-disc"></circle>
          <circle cx="300" cy="382" r="1" class="Li-disc"></circle>
          <circle cx="300" cy="402" r="1" class="Li-disc"></circle>
          <circle cx="300" cy="422" r="1" class="Li-disc"></circle>

          <text x="310" y="365" class="P2">
            Executive team leadership
          </text>
          <text x="310" y="385" class="P2">
            Inventory report generation
          </text>
          <text x="310" y="405" class="P2">
            Client/Vendor relations
          </text>
          <text x="310" y="425" class="P2">
            Market analysis
          </text>

          <circle cx="492" cy="362" r="1" class="Li-disc"></circle>
          <circle cx="492" cy="382" r="1" class="Li-disc"></circle>
          <circle cx="492" cy="402" r="1" class="Li-disc"></circle>
          <circle cx="492" cy="422" r="1" class="Li-disc"></circle>

          <text x="502" y="365" class="P2">
            Executive team leadership
          </text>
          <text x="502" y="385" class="P2">
            Inventory report generation
          </text>
          <text x="502" y="405" class="P2">
            Client/Vendor relations
          </text>
          <text x="502" y="425" class="P2">
            Market analysis
          </text>

          <text x="316" y="485" class="H2">
            EXPERIENCE
          </text>
          <line
            xmlns="http://www.w3.org/2000/svg"
            x1="94"
            y1="501"
            x2="614"
            y2="501"
            class="Line"
          />

          <text x="96" y="530" class="Subheding">
            District Manager
          </text>
          <text x="96" y="550" class="P3">
            Verizon Wireless | August 2011 - September 2012
          </text>

          <circle cx="98" cy="570" r="1" class="Li-disc"></circle>
          <circle cx="98" cy="590" r="1" class="Li-disc"></circle>
          <circle cx="98" cy="610" r="1" class="Li-disc"></circle>
          <circle cx="98" cy="630" r="1" class="Li-disc"></circle>

          <text x="96" y="610" class="P2">
            <tspan x="108" y="573">
              Directed recruitment/training/staff development initiatives.
            </tspan>
            <tspan x="108" y="593">
              Successfully increased employee retention with a positive work
              environment.
            </tspan>
            <tspan x="108" y="613">
              Administered daily operations to ensure policies were adhered to
              by sales staff.
            </tspan>
            <tspan x="108" y="633">
              Cultivated strong business relationships with customers to drive
              business
            </tspan>
          </text>

          <text x="96" y="668" class="Subheding">
            District Manager
          </text>
          <text x="96" y="688" class="P3">
            Verizon Wireless | August 2011 - September 2012
          </text>

          <circle cx="98" cy="713" r="1" class="Li-disc"></circle>
          <circle cx="98" cy="732" r="1" class="Li-disc"></circle>

          <text x="96" y="610" class="P2">
            <tspan x="108" y="715">
              Directed recruitment/training/staff development initiatives.
            </tspan>
            <tspan x="108" y="735">
              Successfully increased employee retention with a positive work
              environment.
            </tspan>
          </text>

          <text x="320" y="790" class="H2">
            EDUCATION
          </text>
          <line
            xmlns="http://www.w3.org/2000/svg"
            x1="94"
            y1="806"
            x2="614"
            y2="806"
            class="Line"
          />

          <text x="96" y="835" class="Subheding">
            {degree}
          </text>
          <text x="96" y="855" class="P3">
            {college}| {year}
          </text>
        </svg>
      )}
    </div>
  );
};

export default Preview;
