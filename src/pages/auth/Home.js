import { Link } from "react-router-dom";
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
export default function Home() {
  return (
    <div className="bg-black">
      <div style={{ height: "90vh" }} className="text-white bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_medium.jpg')]">
        <div className="bg-custom-gradient">
          <div className="bg-black-40">
      <nav className="flex items-center justify-between px-8 py-4 bg-transparent">
        <div>
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix Logo"
              width={120}
              height={40}
            />
          </Link>
        </div>
        <div>
          <button style={{ "background-color": "red" }} className="btn btn-primary px-3 py-1 rounded-md"><Link to="/login">Sign In</Link></button>
        </div>
      </nav>
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-4xl font-black mb-4">
                Unlimited movies, TV shows and more
              </h1>
              <p className="text-lg mb-5">Watch anywhere. Cancel anytime.</p>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="flex mt-3 gap-4">
                <button style={{ "background-color": "red" }} className="btn py-1 px-3 rounded">
                <Link to="/sign_start">
                  Get Started
                </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{"width": "100%", "height": "0.5rem" ,"background-color": "rgb(35, 35, 35)"}}></div>
      <div>
      <div
        style={{ height: "70vh" }}
        className="bg-black flex mt-10 items-center justify-center"
      >
        <div className="flex justify-center">
          <div className="mr-10 flex flex-col justify-center  ">
            <h1 className="text-white text-4xl font-extrabold mb-4">
              Enjoy on your TV
            </h1>
            <p className="text-white text-lg font-normal w-3/5">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="Device Pile"
              width={500}
              height={350}
            />
            <div className="absolute inset-0 bottom-3 right-2 flex items-center justify-center">
              <video
                width={365}
                height={300}
                data-uia="nmhp-card-animation-asset-video"
                autoPlay
                playsInline
                muted
                loop
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div style={{"width": "100%", "height": "0.5rem" ,"background-color": "rgb(35, 35, 35)"}}></div>
      <div>
      <div
        style={{ height: "70vh" }}
        className="bg-black flex mt-10 items-center justify-center"
      >
        <div className="flex justify-center">
        <div className="relative">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt="Device Pile"
            data-uia="nmhp-card-animation-asset-image"
            className="default-ltr-cache-1d3w5wq"
          />
          <div
            data-uia="nmhp-card-animation-asset-motion"
            className="absolute inset-0 bottom-52 right-2 flex items-center justify-center default-ltr-cache-1626rqb e15c37ii10"
          >
            <video
              width={300}
              data-uia="nmhp-card-animation-asset-video"
              autoPlay
              playsInline
              muted
              loop
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                type="video/mp4"
              />
            </video>
            <div className="default-ltr-cache-0"></div>
            <div
              data-uia="nmhp-card-animation-asset-custom"
              aria-hidden="true"
              className="default-ltr-cache-0 e15c37ii9"
            ></div>
          </div>
        </div>
          <div className="mr-10 flex flex-col justify-center  items-center">
            <h1 className="text-white text-4xl font-extrabold mb-4">
              Enjoy on your TV
            </h1>
            <p className="text-white text-lg font-normal w-3/5">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
        </div>
      </div>
      </div>
      <div style={{"width": "100%", "height": "0.5rem" ,"background-color": "rgb(35, 35, 35)"}}></div>
      <div>
      <div
        style={{ height: "70vh" }}
        className="bg-black flex mt-10 items-center justify-center"
      >
        <div className="flex justify-center align-middle items-center">
          <div className="mr-10 flex flex-col justify-center  ">
            <h1 className="text-white text-4xl font-extrabold mb-4">
            Create profiles for kids
            </h1>
            <p className="text-white text-lg font-normal w-3/5">
            Send children on adventures with their favourite characters in a space made just for them—free with your membership.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://occ-0-1973-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
              alt="Device Pile"
              width={800}
              height={350}
            />
          </div>
        </div>
      </div>
      </div>
      <div style={{"width": "100%", "height": "0.5rem" ,"background-color": "rgb(35, 35, 35)","marginTop":"10px"}}></div>
      <div className="text-white mt-20  flex justify-center align-middle items-center">
        <div className="w-4/5">
            <h1 className="text-4xl font-extrabold mb-4">
                Frequently asked questions
            </h1>
            <AccordionPrimitive.Root type="single" collapsible className="w-full">
                <AccordionPrimitive.Item value="item-1" className="my-2 border-b border-gray-600 last:border-none">
                    <AccordionPrimitive.Header>
                    <AccordionPrimitive.Trigger className="flex justify-between items-center py-4 text-white">
                        What is Netflix?
                        <ChevronDownIcon className="w-4 h-4 text-white" />
                    </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionPrimitive.Content className="py-4 text-white">
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                    </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>

                <AccordionPrimitive.Item value="item-2" className="my-2 border-b border-gray-600 last:border-none">
                    <AccordionPrimitive.Header>
                    <AccordionPrimitive.Trigger className="flex justify-between items-center py-4 text-white">
                        How much does Netflix cost?
                        <ChevronDownIcon className="w-4 h-4 text-white" />
                    </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionPrimitive.Content className="py-4 text-white">
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                    </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
                
                
                <AccordionPrimitive.Item value="item-3" className="my-2 border-b border-gray-600 last:border-none">
                    <AccordionPrimitive.Header>
                    <AccordionPrimitive.Trigger className="flex justify-between items-center py-4 text-white">
                            Where can I watch?
                        <ChevronDownIcon className="w-4 h-4 text-white" />
                    </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionPrimitive.Content className="py-4 text-white">
                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                    </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
                
                
                <AccordionPrimitive.Item value="item-4" className="my-2 border-b border-gray-600 last:border-none">
                    <AccordionPrimitive.Header>
                    <AccordionPrimitive.Trigger className="flex justify-between items-center py-4 text-white">
                        How do I cancel?
                        <ChevronDownIcon className="w-4 h-4 text-white" />
                    </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionPrimitive.Content className="py-4 text-white">
                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                    </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
                
                
                <AccordionPrimitive.Item value="item-5" className="my-2 border-b border-gray-600 last:border-none">
                    <AccordionPrimitive.Header>
                    <AccordionPrimitive.Trigger className="flex justify-between items-center py-4 text-white">
                    What can I watch on Netflix?
                        <ChevronDownIcon className="w-4 h-4 text-white" />
                    </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionPrimitive.Content className="py-4 text-white">
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                    </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>

                <AccordionPrimitive.Item value="item-6" className="my-2 border-b border-gray-600 last:border-none">
                    <AccordionPrimitive.Header>
                    <AccordionPrimitive.Trigger className="flex justify-between items-center py-4 text-white">
                    Is Netflix good for kids?
                        <ChevronDownIcon className="w-4 h-4 text-white" />
                    </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionPrimitive.Content className="py-4 text-white">
                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                    </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
            </AccordionPrimitive.Root>
        </div>
      </div>
      <footer className="bg-black py-8 mt-20 text-white">
      <div className="container mx-auto px-4 text-white">
        <div className="flex flex-col md:flex-row text-white justify-between items-center mb-4">
          <div>
            <p className="text-gray-400">
              Questions? Call <Link href="tel:000-000-000-000" className="text-gray-400 underline">6309792221</Link>
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 underline">FAQ</Link>
            <Link href="#" className="text-gray-400 underline">Cookie Preferences</Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="text-gray-400 underline">Gift Card Terms</Link>
            <Link href="#" className="text-gray-400 underline">Legal Notices</Link>
          </div>
        </div>
      </div>
    </footer>
    </div>

  );
}

