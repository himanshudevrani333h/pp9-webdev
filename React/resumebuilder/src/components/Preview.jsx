import "./css/preview.css"
import "./css/template.css"
import {useSelector} from "react-redux"
let Preview = () => {
    let { fname, lname, city, state, phone, email, year, degree, college, cgpa } =
    useSelector((state) => state.details);
  let code = useSelector((state) => state.template);
  return( 
  <div className="preview-container">
      <svg version="1.1" className = "svg" baseProfile="full" xmlns="http://www.w3.org/2000/svg" width="614" height="858" viewBox="5 0 614 858" styles={{margin_auto:0,backgroundImage: `url("img/svg-6.jpg")`}}>
	<defs>
		{/* <style>
			.h1{font-family:"Arial"; font-size:54px; text fill:#333333; font-weight:bold; ____fill:red}
			.p2 {font-family:"Arial"; font-size:9px; fill:#333; ____fill:red}
			.p3 {font-family:"Arial"; font-size:9px; fill:#333; word-spacing: 4px; ____fill:red}
			.p2b {font-family:"Arial"; font-size:11px; font-weight:600; fill:#333;____fill:red}
			.h2 {font-family:"Arial"; font-size:11px; fill:#6094CE; font-weight:600; ____fill:red}
			.subheding {font-family:"Arial"; font-size:10px; fill:#767774; font-weight:600; ____fill:red}
			.li-disc {fill:#333; ____fill:red}
			.text-cap {font-size:28px; fill: #fff;font-family:"Arial";}
			.line{stroke:#fff;___stroke:#090;}
		</style> */}
	</defs>

	<rect styles={{fill:"#449cff" ,x:"19" ,y:"37",width:"70" ,height:"70" }}></rect>

	<text x="62" y="92" class="text-icon">
		<tspan x="33" y="82" class="text-cap">{fname.charAt(0)+lname.charAt(0)}</tspan>
	</text>
	
	<text x="92" y="32" class="h1">
		<tspan xmlns="http://www.w3.org/2000/svg" x="106" y="80">  {fname + " " + lname} </tspan>
	</text>

	<text x="100" y="100" class="p3">
		<tspan x="106" y="104">{city+" "+state+" "+ phone +" "+ email} </tspan>
	</text>

	<text x="22" y="174" class="h2">PROFESSIONAL SUMMARY</text>	

	<text x="194" y="172" class="p2">Successful sales professional with 10+ years experience in large-scale food and retail environments.</text>	
	<text x="194" y="188" class="p2"> Implement cost control measures to ensure operations remain within company targets. Maximize</text>
	<text x="194" y="204" class="p2">bottom-line performance through PL, merchandising, staff management, loss control and inventory</text>
	<text x="194" y="224" class="p2">management.</text>


	<text x="22" y="282" class="h2">SKILLS</text>

	<circle cx="195" cy="275" r="1.5"  class="li-disc"></circle>			
	<circle cx="195" cy="292" r="1.5" class="li-disc"></circle>			
	<circle cx="195" cy="308" r="1.5" class="li-disc"></circle>
	<circle cx="195" cy="326" r="1.5" class="li-disc"></circle>

	<text x="210" y="278" class="p2">Executive team leadership</text>
	<text x="210" y="295" class="p2">Inventory report generation</text>
	<text x="210" y="311" class="p2">Client/Vendor relations</text>
	<text x="210" y="329" class="p2">Market analysis</text>

	<circle cx="384" cy="275" r="1.5"  class="li-disc"></circle>			
	<circle cx="384" cy="292" r="1.5" class="li-disc"></circle>			
	<circle cx="384" cy="308" r="1.5" class="li-disc"></circle>
	<circle cx="384" cy="326" r="1.5" class="li-disc"></circle>

	<text x="402" y="278" class="p2">Sales management</text>
	<text x="402" y="295" class="p2">Staff training</text>
	<text x="402" y="311" class="p2">Customer relations</text>
	<text x="402" y="329" class="p2">Process Improvements</text>

	{/* <!--Core Qualification Section End--> */}

	<text x="22" y="390" class="h2">EXPERIENCE</text>

	<text x="195" y="388" class="subheding">August 2011-Current</text>
	<text x="195" y="402" class="subheding">District Manager</text>
	<text x="195" y="416" class="subheding">Verizon Wireless | San Francisco, CA</text>
	
	<g  transform="translate(0 14)">
		<circle cx="195" cy="420" r="1"  class="li-disc"></circle>			
		<circle cx="195" cy="438" r="1" class="li-disc"></circle>			
		<circle cx="195" cy="454" r="1" class="li-disc"></circle>
		<circle cx="195" cy="472" r="1" class="li-disc"></circle>
		<circle cx="195" cy="472" r="1" class="li-disc"></circle>

		<text x="24" y="380" class="p2">
			<tspan x="210" y="423">Directed recruitment/training/staff development initiatives.</tspan>
			<tspan x="210" y="441">Compute taxes owed and prepare tax returns, ensuring compliance with reporting.</tspan>
			<tspan x="210" y="457">Administered daily operations to ensure policies were adhered to by sales staff.</tspan>
			<tspan x="210" y="475">Cultivated strong business relationships with customers to drive business.</tspan>
		</text>		
	</g>

	<text x="195" y="518" class="subheding">August 2005-2011</text>
	<text x="195" y="532" class="subheding">District Manager</text>
	<text x="195" y="546" class="subheding">Verizon Wireless | San Francisco, CA</text>
	
	<g  transform="translate(0 30)">	
		<circle cx="195" cy="532" r="1"  class="li-disc"></circle>			
		<circle cx="195" cy="550" r="1" class="li-disc"></circle>			
		<circle cx="195" cy="568" r="1" class="li-disc"></circle>
		<circle cx="195" cy="586" r="1" class="li-disc"></circle>

		<text x="24" y="532" class="p2">
			<tspan x="210" y="535">Directed recruitment/training/staff development initiatives.</tspan>
			<tspan x="210" y="553">Compute taxes owed and prepare tax returns, ensuring compliance with reporting.</tspan>
			<tspan x="210" y="571">Administered daily operations to ensure policies were adhered to by sales staff.</tspan>
			<tspan x="210" y="589">Cultivated strong business relationships with customers to drive business.</tspan>
		</text>		
	</g>


	<g  transform="translate(0 25)">
		<text x="22" y="652" class="h2">EDUCATION</text>
        <text x="195" y="650" class="subheding">{year}</text>
		<text x="195" y="652" class="p2">
			<tspan x="195" y="668">{degree+"    "+cgpa}</tspan>
			<tspan x="195" y="684">{college}</tspan>					
		</text>
	</g>

</svg>
  </div>
  )
};

export default Preview;