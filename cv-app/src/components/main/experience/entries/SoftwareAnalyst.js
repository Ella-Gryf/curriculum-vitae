import React from 'react';

import k8 from '../../../../assets/techicons/k8.jpg';
import argo from '../../../../assets/techicons/argo.jpg';
import prometheus from '../../../../assets/techicons/prometheus.jpg';
import grafana from '../../../../assets/techicons/grafana.jpg';

import elastic from '../../../../assets/techicons/elastic.jpg';
import kafka from '../../../../assets/techicons/kafka.jpg';
import aws from '../../../../assets/techicons/aws.jpg';
import java from '../../../../assets/techicons/java.jpg';

import eden from '../../../../assets/eden.jpeg';



const SoftwareAnalyst = () => {
  return (
    <div className='experience-entry software-entry base-grid analyst'>
      <div className='base-container'>
        <h1>Analyst in Core Engineering</h1>
        <h2>Goldman Sachs, Warsaw</h2>

        <div className='grid-row-left'>
          <div className='text-content'>
            <h2>Team/Platform Overview</h2>
            <p>
              My team provided internal developers across the firm with the ability to
              digitize and automate business decisions. We maintained a centrally-hosted, 
              microservices-based web service featuring RESTful APIs and a a scale out 
              farm of discoverable, Nimbus 2-aliased nodes. 
            </p>
            <p>
              The core backend was mostly written in Java and our cloud provider was AWS. 
              Many applications were embedded within the platform, including Apache Kafka, 
              Elasticsearch, Kibana, Prometheus, HA Proxy, Kubernetes and more. As a team 
              we worked to the Agile framework, followed test-driven development and always
              reviewed one another's code.
            </p>

          </div>

          <div className='image-container'>
            <img src={java} 
              alt="Java logo" 
              className='img-radius-c box-shadow img-abs' 
              style={{width: "120px", top: "10px", right: "135px", zIndex: "4"}} />
            <img src={elastic} 
              alt="Elasticsearch logo" 
              className='img-radius-c box-shadow img-abs'
              style={{width: "120px", top: "140px", right: "135px", zIndex: "2"}} />
            <img src={aws} 
              alt="AWS logo" 
              className='img-radius-c box-shadow img-abs' 
              style={{width: "120px", top: "70px", right: "270px", zIndex: "3"}} />
            <img src={kafka} 
              alt="Apache Kafka logo" 
              className='img-radius-c box-shadow img-abs'
              style={{width: "120px", top: "70px", right: "0px", zIndex: "2"}} />
          </div>

        </div>


        <h2 style={{marginTop: "20px"}}>My Contributions</h2>

        <div className='grid-row-right'>

          <div className='image-container'>
            <img src={k8} 
              alt="Kubernetes" 
              className='img-radius-c box-shadow img-abs' 
              style={{width: "120px", top: "10px", right: "135px", zIndex: "4"}} />
            <img src={argo} 
              alt="ArgoCD logo" 
              className='img-radius-c box-shadow img-abs'
              style={{width: "120px", top: "140px", right: "135px", zIndex: "2"}} />
            <img src={prometheus} 
              alt="Prometheus logo" 
              className='img-radius-c box-shadow img-abs' 
              style={{width: "120px", top: "70px", right: "270px", zIndex: "3"}} />
            <img src={grafana} 
              alt="Grafana dashboards logo" 
              className='img-radius-c box-shadow img-abs'
              style={{width: "120px", top: "70px", right: "0px", zIndex: "2"}} />
          </div>

          <div className='text-content'>
            
            <h3>Kubernetes</h3>
            <p>
              A fellow analyst and I began the process of containerizing our platform with Kubernetes and
              configuring the containers to run with ArgoCD deployment. 
            </p>
            <p>
              By the time I left we had successfully implemented the necessary infrastructure for our 
              application to run in Kubernetes containers. We had also built a stub Git project containing 
              a default child image for our clients to customise and integrate with their own applications. 
            </p>
          </div>
        </div>

        <div style={{marginBottom: "50px" }}>
          <h3>Site Reliability Engineering</h3>
          <p>
            The other analyst in the team and I together set up observability and monitoring
            of our platform. We:
          </p>
          <ul className='list-text indent-left'>
            <li>
              Setup <span className='bold'> Prometheus </span> to monitor the average availability of our execution engine environments 
              and the average latency of executing decision models in these environments given model size,
            </li>
            <li>
              Visualised our data using <span className='bold'> Grafana dashboards</span>,
            </li>
            <li>
              Configured Prometheus' <span className='bold'> Alertmanager </span> to email alerts when our 
            SLIs reached certain thresholds, and integrated Alertmanager with PagerDuty to notify the 
            team in case of SLO violations.
            </li>
          </ul>
        </div>


        <div className='grid-row-left'>
          <div className='text-content'>
            <h2>Moving Abroad</h2>
            <p>
              I had never been in Warsaw before this job, which I started a 
              week after national lockdown in winter. The lessons I learned with 
              regards to forming connections in a new city, integrating into 
              local culture and proactively initiating social occasions with 
              colleagues will stay with me forever.  
            </p>

          </div>

          <div className='image-container'>
            <img src={eden} 
              alt="Friends in Warsaw" 
              className='img-radius box-shadow img-abs' 
              style={{height: "280px", right: "10px", marginTop: "2rem"}} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default SoftwareAnalyst;