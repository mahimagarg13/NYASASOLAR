import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';




function Choose() {
	return (


		<div className=" m-bottom">

			<p className="heading ">Our Testimonials</p>
			{/* <p className="p1">Feedback</p> */}


			<Splide className="" options={{
				rewind: true,
				// width: 800,
				gap: '1rem',
			}}>
				<SplideSlide>
					<div className="card cardContainerYellow m-b  c-h text-center">
						<div className="card-body   m-left">
							<img className="h-w" src="/img/1p.jpeg" alt="img" />
							<h6 className="color ">Alkeshkumar Pathak</h6>
							<p className="pd">
								Very nice product, eco-friendly, energy efficient, giving maximum output at least operating cost. Always prefer for hot water generation system of any kind of project. My best wishes and first preference always with your company and it's products.
							</p>

						</div></div>
				</SplideSlide>
				<SplideSlide>
					<div className="card cardContainerYellow text-center m-b">
						<div className="card-body">
							<img className="h-w" src="/img/2p.png" alt="img" />
							<h6 className="color">
								YourWeddingManager</h6>
							<p className="pd">
								Recently, I Suggested My Neighbour For Solar Energy system through Nayasa Energy System Solutions.. Here are their feedback :
								- Fast  Installation Service
								- Corporative People
								- In time installation Completed
								- Flexible in Timings
								- Over all We are very Satisfied With Nayasa Energy System Services 👍
							</p>

						</div></div>  </SplideSlide>
				<SplideSlide>
					<div className="card cardContainerYellow text-center m-b">
						<div className="card-body">
							<img className="h-w" src="/img/3p.jpeg" alt="img" />
							<h6 className="color">Deva</h6>
							<p className="pd">Nyasa energy system Highly recommended for All types of Rooftop Power Pack, Solar Water Heaters, Heat Pumps, Hybrid System, Pressure Pumps, RO System & all types of water purifier. </p>

						</div></div>  </SplideSlide>
				<SplideSlide>
					<div className="card cardContainerYellow  text-center m-b">
						<div className="card-body">
							<img className="h-w" src="/img/1p.jpeg" alt="img" />
							<h6 className="color">Jiss Antony</h6>
							<p className="pd">Great Team, helpful and fast customer services.....</p>

						</div></div>  </SplideSlide>
				<SplideSlide>
					<div className="card text-center cardContainerYellow m-b">
						<div className="card-body">
							<img className="h-w" src="/img/2p.png" alt="img" />
							<h6 className="color">Sharansh Arora</h6>
							<p className="pd">Recommend for Purchasing Solar Water Heater, Solar Panels & Also dealing in Aquaguards. Good after sales Service. Emmvee Solar Distributor
							</p>

						</div></div>  </SplideSlide>
				<SplideSlide>
					<div className="card text-center cardContainerYellow m-b">
						<div className="card-body">
							<img className="h-w" src="/img/3p.jpeg" alt="img" />
							<h6 className="color">Pooja Jainn</h6>
							<p className="pd">It's a wonderful alternate we can think of, the services  are delightfull and a must recommended product
							</p>

						</div></div>  </SplideSlide>




			</Splide>
		</div>

		/* <div className="splideContainer container">
			<div className="splide w-100" data-splide='{"autoplay":"true","perPage":"1"}'>
				<div className="splide__track">
					<ul className="splide__list flexWrap">
						<li className="splide__slide m-right">
							<div className="card cardContainerYellow m-b  c-h text-center">
								<div className="card-body   m-left">
									<img className="h-w" src="/img/1p.jpeg" alt="img" />
									<h6 className="color ">Alkeshkumar Pathak</h6>
									<p className="pd">
										Very nice product, eco-friendly, energy efficient, giving maximum output at least operating cost. Always prefer for hot water generation system of any kind of project. My best wishes and first preference always with your company and it's products.
									</p>

								</div></div>
						</li>
						<li className="splide__slide m-right"><div className="card cardContainerYellow text-center m-b">
							<div className="card-body">
								<img className="h-w" src="/img/2p.png" alt="img" />
								<h6 className="color">
									YourWeddingManager</h6>
								<p className="pd">
									Recently, I Suggested My Neighbour For Solar Energy system through Nayasa Energy System Solutions.. Here are their feedback :
									- Fast  Installation Service
									- Corporative People
									- In time installation Completed
									- Flexible in Timings
									- Over all We are very Satisfied With Nayasa Energy System Services 👍
								</p>

							</div></div></li>
						<li className="splide__slide m-right"><div className="card cardContainerYellow text-center m-b">
							<div className="card-body">
								<img className="h-w" src="/img/3p.jpeg" alt="img" />
								<h6 className="color">Deva</h6>
								<p className="pd">Nyasa energy system Highly recommended for All types of Rooftop Power Pack, Solar Water Heaters, Heat Pumps, Hybrid System, Pressure Pumps, RO System & all types of water purifier. </p>

							</div></div></li>
						<li className="splide__slide m-right">
							<div className="card cardContainerYellow  text-center m-b">
								<div className="card-body">
									<img className="h-w" src="/img/1p.jpeg" alt="img" />
									<h6 className="color">Jiss Antony</h6>
									<p className="pd">Great Team, helpful and fast customer services.....</p>

								</div></div></li>
						<li className="splide__slide m-right"><div className="card text-center cardContainerYellow m-b">
							<div className="card-body">
								<img className="h-w" src="/img/2p.png" alt="img" />
								<h6 className="color">Sharansh Arora</h6>
								<p className="pd">Recommend for Purchasing Solar Water Heater, Solar Panels & Also dealing in Aquaguards. Good after sales Service. Emmvee Solar Distributor
								</p>

							</div></div></li>
						<li className="splide__slide m-right"><div className="card text-center cardContainerYellow m-b">
							<div className="card-body">
								<img className="h-w" src="/img/3p.jpeg" alt="img" />
								<h6 className="color">Pooja Jainn</h6>
								<p className="pd">It's a wonderful alternate we can think of, the services  are delightfull and a must recommended product
								</p>

							</div></div></li>

					</ul>
				</div>

			</div>
		</div>
	</div> */
	);






}
export default Choose;