"use strict";(self.webpackChunkdocs_hosting=self.webpackChunkdocs_hosting||[]).push([[85],{4379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));n(8209);const i={},r="Running on Docker",l={unversionedId:"installation/docker-deployment",id:"installation/docker-deployment",title:"Running on Docker",description:"Hosting nBold on a docker server is for educational purpose only and is not considered as a supported production environment.",source:"@site/contents/30-installation/30-docker-deployment.md",sourceDirName:"30-installation",slug:"/installation/docker-deployment",permalink:"/installation/docker-deployment",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/30-installation/30-docker-deployment.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"autoSidebar",previous:{title:"Install prerequisites",permalink:"/installation/prerequisites"},next:{title:"Running on Azure",permalink:"/installation/azure-deployment"}},s={},p=[{value:"Docker prerequisites",id:"docker-prerequisites",level:2},{value:"Initialize the project",id:"initialize-the-project",level:2},{value:"Minimal configuration",id:"minimal-configuration",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-on-docker"},"Running on Docker"),(0,a.kt)("admonition",{title:"Warning",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Hosting nBold on a docker server is for educational purpose only and is not considered as a supported production environment.")),(0,a.kt)("p",null,"This tutorial assumes you've already installed the common prerequisites from the ",(0,a.kt)("a",{parentName:"p",href:"/hosting/installation/get-started.md"},"Getting Started")," guide."),(0,a.kt)("h2",{id:"docker-prerequisites"},"Docker prerequisites"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To follow this tutorial, you'll need an installed and running Docker server.\nIf your server doesn't come with Docker pre-installed, you can follow ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"their docs")," to install it.")),(0,a.kt)("h2",{id:"initialize-the-project"},"Initialize the project"),(0,a.kt)("p",null,"After cloning our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nboldhq"},"Hosting")," repository, open the docker project directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ./terraform/docker\n")),(0,a.kt)("p",null,"Initialize the terraform project using the ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," command, which downloads a plugin that allows Terraform to interact with Docker."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"terraform init\n")),(0,a.kt)("p",null,"When Terraform asks you to confirm type yes and press ENTER."),(0,a.kt)("h2",{id:"minimal-configuration"},"Minimal configuration"),(0,a.kt)("p",null,"nBold comes with safe defaults, but you still need to define some settings specific to your environment. To do so, open the ",(0,a.kt)("inlineCode",{parentName:"p"},"variables.tf")," configuration file. It defines most of the configurable aspects of your environment."),(0,a.kt)("p",null,"Locate these keys and define the appropriate value in the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," field:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hcl"},'variable "WEB_PUBLICURL" {\n  description = "Public URL of the web tier"\n  type        = string\n  default     = ""\n}\n\nvariable "API_PUBLICURL" {\n  description = "Public URL of the api tier"\n  type        = string\n  default     = ""\n}\n\nvariable "MICROSOFT_AZURE_AD_APP_CLIENT_ID" {\n  description = "Microsoft Azure AD app registration client ID."\n  type        = string\n  default     = ""\n}\n\nvariable "MICROSOFT_AZURE_AD_APP_CLIENT_SECRET" {\n  description = "Microsoft Azure AD app registration client Secret."\n  type        = string\n  default     = ""\n}\n')),(0,a.kt)("p",null,"For more information about all the available configuration settings, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/hosting/references/configuration-reference.md"},"Configuration Reference")),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"Now that you've defined your minimal configuration, you're ready to deploy your brand new nBold environment."),(0,a.kt)("p",null,"Before executing your project, validate your configuration using the ",(0,a.kt)("inlineCode",{parentName:"p"},"plan")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"terraform plan\n")),(0,a.kt)("p",null,"This command generates a human-readable version of your configuration and helps you validate the changes that are gonna be performed on your environment before actually executing it."),(0,a.kt)("p",null,"Once validated, execute the plan using the ",(0,a.kt)("inlineCode",{parentName:"p"},"apply")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,a.kt)("p",null,"You can now verify your installation by visiting ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8000/home"},"http://localhost:8000/home")," in your web browser."),(0,a.kt)("admonition",{title:"Tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also the the list of running containers with:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Congrats! You've now provisioned a full-featured nBold environment.")),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"At this stage, you should have a basic installation of nBold going. The latest step is to ",(0,a.kt)("a",{parentName:"p",href:"/hosting/installation/microsoft-teams-package.md"},"generate your Microsoft Teams package")))}c.isMDXComponent=!0}}]);