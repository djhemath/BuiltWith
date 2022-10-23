import { ITechnology } from "./models";
import { Utils } from "./utils";

const template = document.createElement('template');
template.innerHTML = `
    <style>
    .built-with-container .content-container::-webkit-scrollbar {
        width: 10px;
    }

    .built-with-container .content-container::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 5px;
    }

    .built-with-container .content-container::-webkit-scrollbar-thumb {
        background-color: #757575;
        border-radius: 5px;
    }

    .built-with-container {
        position: fixed;
        bottom: 20px;
        right:20px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .built-with-container button {
        width: 50px;
        height: 50px;
        padding: 10px;
        background-color: #505050;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 0 10px #50505087;
    }

    .built-with-container button svg {
        animation: svg-shadow 1.5s ease-in-out infinite alternate;
    }

    @keyframes svg-shadow {
        from {
            fill: gold;
        }

        to {
            fill: silver;
        }
    }

    .built-with-container .content-container {
        background-color: #505050;
        padding: 10px 0;
        border-radius: 10px;
        margin-bottom: 10px;
        color: #fff;
        box-shadow: 0 0 10px #50505087;
        max-height: 0;
        padding: 0;
        overflow: hidden;
        transition: 0.5s ease;
    }

    .built-with-container .content-container:hover {
        overflow: auto;
    }

    .built-with-container .content-container ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .built-with-container .content-container ul li {
        padding: 10px 30px;
        cursor: pointer;
    }

    .built-with-container .content-container ul li:hover {
        background-color: #676767;
    }
    </style>

    <div class="built-with-container">
        <div class="content-container">
            <ul id="technologies-container">
            </ul>
        </div>

        <button data-js-id="built-with-btn">
            <span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9H10C9.73478 9 9.48043 9.10536 9.29289 9.29289C9.10536 9.48043 9 9.73478 9 10V14C9 14.2652 9.10536 14.5196 9.29289 14.7071C9.48043 14.8946 9.73478 15 10 15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V10C15 9.73478 14.8946 9.48043 14.7071 9.29289C14.5196 9.10536 14.2652 9 14 9ZM13 13H11V11H13V13ZM21 13C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11H19V9H21C21.2652 9 21.5196 8.89464 21.7071 8.70711C21.8946 8.51957 22 8.26522 22 8C22 7.73478 21.8946 7.48043 21.7071 7.29289C21.5196 7.10536 21.2652 7 21 7H18.82C18.6707 6.5806 18.4299 6.19969 18.1151 5.8849C17.8003 5.57011 17.4194 5.32932 17 5.18V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V5H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V5H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V5.18C6.5806 5.32932 6.19969 5.57011 5.8849 5.8849C5.57011 6.19969 5.32932 6.5806 5.18 7H3C2.73478 7 2.48043 7.10536 2.29289 7.29289C2.10536 7.48043 2 7.73478 2 8C2 8.26522 2.10536 8.51957 2.29289 8.70711C2.48043 8.89464 2.73478 9 3 9H5V11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H5V15H3C2.73478 15 2.48043 15.1054 2.29289 15.2929C2.10536 15.4804 2 15.7348 2 16C2 16.2652 2.10536 16.5196 2.29289 16.7071C2.48043 16.8946 2.73478 17 3 17H5.18C5.32932 17.4194 5.57011 17.8003 5.8849 18.1151C6.19969 18.4299 6.5806 18.6707 7 18.82V21C7 21.2652 7.10536 21.5196 7.29289 21.7071C7.48043 21.8946 7.73478 22 8 22C8.26522 22 8.51957 21.8946 8.70711 21.7071C8.89464 21.5196 9 21.2652 9 21V19H11V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21V19H15V21C15 21.2652 15.1054 21.5196 15.2929 21.7071C15.4804 21.8946 15.7348 22 16 22C16.2652 22 16.5196 21.8946 16.7071 21.7071C16.8946 21.5196 17 21.2652 17 21V18.82C17.4194 18.6707 17.8003 18.4299 18.1151 18.1151C18.4299 17.8003 18.6707 17.4194 18.82 17H21C21.2652 17 21.5196 16.8946 21.7071 16.7071C21.8946 16.5196 22 16.2652 22 16C22 15.7348 21.8946 15.4804 21.7071 15.2929C21.5196 15.1054 21.2652 15 21 15H19V13H21ZM17 16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17H8C7.73478 17 7.48043 16.8946 7.29289 16.7071C7.10536 16.5196 7 16.2652 7 16V8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7H16C16.2652 7 16.5196 7.10536 16.7071 7.29289C16.8946 7.48043 17 7.73478 17 8V16Z"/>
                </svg>                    
            </span>
        </button>

    </div>
`;

class BuiltWith extends HTMLElement {
    public technologies: ITechnology[] = [];

    constructor() {
        super();
        this.technologies = [];
    }

    static get observedAttributes() { return ['technologies']; }

    private processTechnologiesAttribute(): ITechnology[] {
        let technologies: ITechnology[] = [];

        const inputTechnologies = this.getAttribute('technologies');
        const jsonTechnologies = Utils.processIncomingJSONAttribute(inputTechnologies);

        if(jsonTechnologies === null) {
            return []
        } else if(jsonTechnologies === false) {
            if(inputTechnologies.includes(",")) {
                technologies = inputTechnologies.split(",").map(t => ({name: t.trim()}));
            } else {
                technologies = [{name: inputTechnologies}];
            }
        } else {
            technologies = jsonTechnologies;
        }

        return technologies;
    }

    private setData() {
        this.technologies = this.processTechnologiesAttribute();;
        this.render();
    }

    connectedCallback() {
        console.log('connectedCallback');
        this.attachShadow({mode: 'open'});
        this.setData();

        const button = this.shadowRoot.querySelector('[data-js-id="built-with-btn"]') as HTMLButtonElement;
        const builtWithContentContainer = this.shadowRoot.querySelector('.built-with-container .content-container') as HTMLDivElement;
        let isOpen = false;
    
        button.onclick = function() {
            let height = '';
            let padding = '';
    
            if(isOpen) {
                height = '0';
                padding = '0';
            } else {
                height = '400px';
                padding = '20px 0';
            }
    
            isOpen = !isOpen;
    
            builtWithContentContainer.style.maxHeight = height;
            builtWithContentContainer.style.padding = padding;
        }

        const createTechnologyElement = (technology) => {
            const { name } = technology;
    
            const li = document.createElement('li');
            li.textContent = name;
    
            return li;
        }
    
        const technologiesContainer = this.shadowRoot.getElementById("technologies-container");
        this.technologies.forEach(technology => {
            technologiesContainer.appendChild(createTechnologyElement(technology));
        });
    }

    attributeChangedCallback() {
        this.setData();
    }

    private render() {
        if(this.shadowRoot) {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }
}

window.customElements.define("built-with", BuiltWith);