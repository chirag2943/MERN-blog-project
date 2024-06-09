import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsTwitter, BsGithub} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-700 dark:bg-[rgb(55,59,66)]" >
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                 <Link  to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                        Chirag s </span>
                      Blog
                 </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                  <div>
                  <Footer.Title title="About"/>
                  <Footer.LinkGroup col>
                    <Footer.Link 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Amazon clone
                    </Footer.Link>
                  </Footer.LinkGroup>
                  <Footer.LinkGroup col>
                    <Footer.Link 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React-project
                    </Footer.Link>
                  </Footer.LinkGroup>
                  </div>
                  <div>
                  <Footer.Title title="Follow me"/>
                  <Footer.LinkGroup col>
                    <Footer.Link 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Footer.Link>
                  </Footer.LinkGroup>
                  <Footer.LinkGroup col>
                    <Footer.Link 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </Footer.Link>
                  </Footer.LinkGroup>
                  </div>
                  <div>
                  <Footer.Title title="Contact us"/>
                  <Footer.LinkGroup col>
                    Contact number
                  </Footer.LinkGroup>
                  <Footer.LinkGroup col>
                    <Footer.Link >
                      Gmail
                    </Footer.Link>
                  </Footer.LinkGroup>
                  </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright 
                href="#" 
                by="Chirag's blog" 
                year={new Date().getFullYear()}
              />
              <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook}/>
                <Footer.Icon href="#" icon={BsInstagram}/>
                <Footer.Icon href="#" icon={BsGithub}/>
                <Footer.Icon href="#" icon={BsTwitter}/>
              </div>
            </div>
        </div>
    </Footer>
  )
}
