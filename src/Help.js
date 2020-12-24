import React from 'react';
import Sidebar from './Sidebar';
import ReactDOM from 'react-dom';
import './DefaultStyles.css';
import './Help.scss';

const Help = () => {

    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
    accordionItemBody.style.maxHeight = 0;
    }
    
})
})

    return (
        <>
            <Sidebar />
            <main>
                <div class="section-help">
                    <div class="header-help">
                        <div class="header-help-items">
                            <img class="help-header-image" src={require("./images/Help/help-header-image.svg").default} alt="img-header" class="header-help-image" />
                            <h4 class="help-header-title">Помощь</h4>
                        </div>
                    </div>
                    <div class="questions-body">
                        <div class="accordion">
                            <div class="accordion-item">
                                <div class="accordion-item-header">
                                    Как пользоваться сайтом?
                                </div>
                                <div class="accordion-item-body">
                                    <div class="accordion-item-body-content">
                                        Web Development broadly refers to the tasks associated with developing functional websites and applications
                                        for the Internet. The web development process includes web design, web content development,
                                        client-side/server-side scripting and network security configuration, among other tasks.
                                        Web Development broadly refers to the tasks associated with developing functional websites and applications
                                        for the Internet. The web development process includes web design, web content development,
                                        client-side/server-side scripting and network security configuration, among other tasks.
                                        Web Development broadly refers to the tasks associated with developing functional websites and applications
                                        for the Internet. The web development process includes web design, web content development,
                                        client-side/server-side scripting and network security configuration, among other tasks.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-item-header">
                                    Как пользоваться приложением?
                                </div>
                                <div class="accordion-item-body">
                                    <div class="accordion-item-body-content">
                                        HTML, aka HyperText Markup Language, is the dominant markup language for creating websites and anything that
                                        can be viewed in a web browser.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-item-header">
                                    Как найти мероприятие?
                                </div>
                                <div class="accordion-item-body">
                                    <div class="accordion-item-body-content">
                                        HTTP, aka HyperText Transfer Protocol, is the underlying protocol used by the World Wide Web and this protocol
                                        defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in
                                        response to various commands.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-item-header">
                                    Как связаться с создателем мероприятия?
                                </div>
                                <div class="accordion-item-body">
                                    <div class="accordion-item-body-content">
                                        HTTP, aka HyperText Transfer Protocol, is the underlying protocol used by the World Wide Web and this protocol
                                        defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in
                                        response to various commands.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-item-header">
                                    Как добавлять мероприятия?
                                </div>
                                <div class="accordion-item-body">
                                    <div class="accordion-item-body-content">
                                        CORS, aka Cross-Origin Resource Sharing, is a mechanism that enables many resources (e.g. images, stylesheets,
                                        scripts, fonts) on a web page to be requested from another domain outside the domain from which the resource
                                        originated.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <script>
            
            </script>
        </>
    )

    
}

export default Help;

