"use strict";(self.webpackChunkdocs_hosting=self.webpackChunkdocs_hosting||[]).push([[472],{63329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),a=n(8209);const i={},s="Installation",l={unversionedId:"installation/README",id:"installation/README",title:"Installation",description:"Deployment overview",source:"@site/contents/30-installation/README.md",sourceDirName:"30-installation",slug:"/installation/",permalink:"/installation/",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/30-installation/README.md",tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"Architecture Overview",permalink:"/architecture-overview"},next:{title:"Install prerequisites",permalink:"/installation/prerequisites"}},p={},d=[{value:"Deployment overview",id:"deployment-overview",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"deployment-overview"},"Deployment overview"),(0,o.kt)("p",null,"nBold is designed to be self-hosted from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A local or remote Docker service"),(0,o.kt)("li",{parentName:"ul"},"Your Microsoft Azure tenant")),(0,o.kt)("p",null,"Here is an overview of the different steps to deploy a nBold environment:"),(0,o.kt)(a.G,{chart:"graph LR\n    %% Nodes\n    subgraph cp[Setup common prerequisites]\n        terraform(Install<br />Terraform)\n        projecttemplates(Get deployment<br />projects templates)\n        appreg(Register your app<br />in Azure AD)\n    end\n    subgraph docker[Deploy to Docker]\n        dockerprereq(Setup Docker<br />prerequisites)\n        dockerdeploy(Deploy)\n    end\n    subgraph azure[Deploy to Azure]\n        azureprereq(Setup Azure<br />rerequisites)\n        azuredeploy(Deploy)\n    end\n    package(Create Microsoft<br />Teams package)\n    %% Styles\n    classDef startend fill:#9099d8, stroke-width:0px;\n        class s startend\n        class e startend\n    %% Links\n    terraform --\x3e projecttemplates\n    projecttemplates --\x3e appreg\n    appreg --\x3e dockerprereq\n    dockerprereq --\x3e dockerdeploy\n    appreg --\x3e azureprereq\n    azureprereq --\x3e azuredeploy\n    dockerdeploy --\x3e package\n    azuredeploy --\x3e package",mdxType:"Mermaid"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},(0,o.kt)("inlineCode",{parentName:"strong"},"nBold Self-Hosted")," comes with batteries included!")),(0,o.kt)("p",{parentName:"admonition"},"You don't have to be a Docker or Azure expert to run your own nBold platform!\nYou should just have a basic understanding of the command-line and networking to successfully set up your own full-featured environment.")),(0,o.kt)("p",null,"This getting started tutorial will guide you through the different steps required to setup the minimal common prerequisites."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("a",{parentName:"p",href:"/installation/prerequisites"},"common prerequisites"),"."))}m.isMDXComponent=!0}}]);