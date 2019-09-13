import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Candidate } from './candidate';


@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  candidates: Array<Candidate>;


  constructor() {
    // ...fetch from API call
    this.candidates = [
      {
        id: 0,
        name: 'Sizwe Nkumalo',
        description: 'CEO @ Hello Crowd',
        avatar: './assets/avatars/avatar0.png',

        summary: "An energetic and proactive Head of Operations who can produce the desired effect with the minimum of effort, expense, or waste. Maxine can drive a business to increase profits by avoiding procrastination and acting instead of worrying. She is someone who consistently looks to identify how she can optimise efficiency and improve staff performance. In her current role she works closely with all teams and individuals across the company to develop and coordinate the execution of strategies that will lead to an increase in operational efficiency. One of her strongest points is her advanced knowledge of corporate policy, laws and regulatory requirements specific to her areas of responsibility. Aside from her leadership skills she is a true professional who champions company culture and employee engagement at every opportunity. Right now, she is looking for a position with a reputable company where she can build a long-term career.",
        skills: [2, 2, 2, 1, 0, 0, 1, 0,],
        experience: [
          {
            role: 'Cheif Digital Officer',
            company: 'HelloCrowd',
            datefrom: 'Mar 2010',
            dateto: 'Current',
            memo: "Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life. Umami tattooed sriracha meggings pickled Marfa Blue Bottle High Life next level four loko PBR. Keytar pickled next level keffiyeh drinking vinegar street art. Art party vinyl Austin, retro whatever keytar mixtape. Pickled ethnic farm-to-table distillery ugh chia. Ethical Odd Future narwhal, mlkshk fap asymmetrical next level High Life literally cred blog. Banh mi swag art party, fashion axe you probably haven't heard of them stumptown tousled food truck post-ironic quinoa bicycle rights aesthetic keytar Pitchfork.",
          },
          {
            role: 'Business Unit Director',
            company: 'Penquin',
            datefrom: 'Jan 2003',
            dateto: 'Feb 2010',
            memo: "salvia kitsch before they sold out High Life. Umami tattooed sriracha meggings pickled Marfa Blue Bottle High Life next l",
          },
        ],
        education: [
          {
            school: 'University of Cape Town',
            degree: 'BCom LLB',
            yearfrom: 1997,
            yearto: 2003,
          },
          {
            school: 'St Johns College',
            degree: 'Unknown Degree',
            yearfrom: 1993,
            yearto: 1997,
          },
        ],

        questionanswer: [
          {
            question: 'Are you under the age of 25?',
            answer: 'Yes',
          },
          {
            question: 'Are you a South African citizen?',
            answer: 'Yes',
          },
          {
            question: 'Do you have more than three years’ full-time work experience after graduation?',
            answer: 'Yes',
          },
          {
            question: 'Please tell us about your work / volunteer experience?',
            answer: "I am currently a business Analyst at a global firm within the consulting division. I am problem solver who specifically looks at sales and organizational problems that impact on company efficiency. Thus far I have worked with clients within industries such as financial services, FMCG's, alcohol and pharmaceutical companies. I am required to understand project management and be the project manager on every project I do. I am also required to analyze , research and develop strategic solutions for the clients I work with. As an analyst I am also responsible for ensuring projects run seamlessly and smoothly and that profitability of projects is managed from start to finish. I am also required to multi-task as I project manage and problem solve for multiple projects at a time. Additionally I am required to contribute to new business development for the business, and not only bring in clients but write proposals and be apart of pitching them. I have also ran a start up before this whilst simultaneously doing my studies which has aided me in developing the skills that are required of me in my current role",
          },
        ],

        extroversion: 2,
        agreeableness: 2,
        openness: 3,
        conscientiousness: 2,
        neuroticism: 1,

        videointerview: [
          {
            question: 'Why are manhole covers round?',
            video: 'https://www.youtube.com/watch?v=OVAMb6Kui6A',
          },
          {
            question: 'Why are manhole covers round?',
            video: 'https://www.youtube.com/watch?v=OVAMb6Kui6A',
          },
          {
            question: 'Why are manhole covers round?',
            video: 'https://www.youtube.com/watch?v=OVAMb6Kui6A',
          },
        ],
      },
      {
        id: 1,
        name: 'Katarzyna Tykarska',
        description: 'IT Recruitment Consultant @ Dismo Recruitment Solutions',
        avatar: './assets/avatars/avatar1.jpeg',

        summary: "Dismo Recruitment Solutions specializes in recruiting front-end and back-end developers, experts in the area of Data Science & Data Management as well as IT managers and project managers.",
        skills: [2, 1, 1, 2, 2, 0, 1, 0,],
        experience: [
          {
            role: 'Cheif Digital Officer',
            company: 'HelloCrowd',
            datefrom: 'Mar 2010',
            dateto: 'Current',
            memo: "Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life. Umami tattooed sriracha meggings pickled Marfa Blue Bottle High Life next level four loko PBR. Keytar pickled next level keffiyeh drinking vinegar street art. Art party vinyl Austin, retro whatever keytar mixtape. Pickled ethnic farm-to-table distillery ugh chia. Ethical Odd Future narwhal, mlkshk fap asymmetrical next level High Life literally cred blog. Banh mi swag art party, fashion axe you probably haven't heard of them stumptown tousled food truck post-ironic quinoa bicycle rights aesthetic keytar Pitchfork.",
          },
          {
            role: 'Business Unit Director',
            company: 'Penquin',
            datefrom: 'Jan 2003',
            dateto: 'Feb 2010',
            memo: "salvia kitsch before they sold out High Life. Umami tattooed sriracha meggings pickled Marfa Blue Bottle High Life next l",
          },
        ],
        education: [
          {
            school: 'University of Cape Town',
            degree: 'BCom LLB',
            yearfrom: 1997,
            yearto: 2003,
          },
          {
            school: 'St Johns College',
            degree: 'Unknown Degree',
            yearfrom: 1993,
            yearto: 1997,
          },
        ],

        questionanswer: [
          {
            question: 'Are you under the age of 25?',
            answer: 'Yes',
          },
          {
            question: 'Are you a South African citizen?',
            answer: 'Yes',
          },
          {
            question: 'Do you have more than three years’ full-time work experience after graduation?',
            answer: 'Yes',
          },
          {
            question: 'Please tell us about your work / volunteer experience?',
            answer: "I am currently a business Analyst at a global firm within the consulting division. I am problem solver who specifically looks at sales and organizational problems that impact on company efficiency. Thus far I have worked with clients within industries such as financial services, FMCG's, alcohol and pharmaceutical companies. I am required to understand project management and be the project manager on every project I do. I am also required to analyze , research and develop strategic solutions for the clients I work with. As an analyst I am also responsible for ensuring projects run seamlessly and smoothly and that profitability of projects is managed from start to finish. I am also required to multi-task as I project manage and problem solve for multiple projects at a time. Additionally I am required to contribute to new business development for the business, and not only bring in clients but write proposals and be apart of pitching them. I have also ran a start up before this whilst simultaneously doing my studies which has aided me in developing the skills that are required of me in my current role",
          },
        ],

        extroversion: 3,
        agreeableness: 0,
        openness: 4,
        conscientiousness: 2,
        neuroticism: 1,

        videointerview: [
          {
            question: 'Why are manhole covers round?',
            video: 'https://www.youtube.com/watch?v=OVAMb6Kui6A',
          },
          {
            question: 'Why are manhole covers round?',
            video: 'https://www.youtube.com/watch?v=OVAMb6Kui6A',
          },
          {
            question: 'Why are manhole covers round?',
            video: 'https://www.youtube.com/watch?v=OVAMb6Kui6A',
          },
        ],
      },
      {
        id: 2,
        name: 'Lech Alexander Murawski',
        description: 'Entrepreneur and Engineer',
        avatar: './assets/avatars/avatar2.jpeg',

        summary: "An energetic and proactive Head of Operations who can produce the desired effect with the minimum of effort, expense, or waste. Maxine can drive a business to increase profits by avoiding procrastination and acting instead of worrying. She is someone who consistently looks to identify how she can optimise efficiency and improve staff performance. In her current role she works closely with all teams and individuals across the company to develop and coordinate the execution of strategies that will lead to an increase in operational efficiency. One of her strongest points is her advanced knowledge of corporate policy, laws and regulatory requirements specific to her areas of responsibility. Aside from her leadership skills she is a true professional who champions company culture and employee engagement at every opportunity. Right now, she is looking for a position with a reputable company where she can build a long-term career.",
        skills: [2, 0, 0, 1, 0, 0, 1, 2,],
        experience: [
          {
            role: 'Cheif Digital Officer',
            company: 'HelloCrowd',
            datefrom: 'Mar 2010',
            dateto: 'Current',
            memo: "Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life. Umami tattooed sriracha meggings pickled Marfa Blue Bottle High Life next level four loko PBR. Keytar pickled next level keffiyeh drinking vinegar street art. Art party vinyl Austin, retro whatever keytar mixtape. Pickled ethnic farm-to-table distillery ugh chia. Ethical Odd Future narwhal, mlkshk fap asymmetrical next level High Life literally cred blog. Banh mi swag art party, fashion axe you probably haven't heard of them stumptown tousled food truck post-ironic quinoa bicycle rights aesthetic keytar Pitchfork.",
          },
          {
            role: 'Business Unit Director',
            company: 'Penquin',
            datefrom: 'Jan 2003',
            dateto: 'Feb 2010',
            memo: "salvia kitsch before they sold out High Life. Umami tattooed sriracha meggings pickled Marfa Blue Bottle High Life next l",
          },
        ],
        education: [
          {
            school: 'University of Cape Town',
            degree: 'BCom LLB',
            yearfrom: 1997,
            yearto: 2003,
          },
          {
            school: 'St Johns College',
            degree: 'Unknown Degree',
            yearfrom: 1993,
            yearto: 1997,
          },
        ],

        questionanswer: [
          {
            question: 'Are you under the age of 25?',
            answer: 'Yes',
          },
          {
            question: 'Are you a South African citizen?',
            answer: 'Yes',
          },
          {
            question: 'Do you have more than three years’ full-time work experience after graduation?',
            answer: 'Yes',
          },
          {
            question: 'Please tell us about your work / volunteer experience?',
            answer: "I am currently a business Analyst at a global firm within the consulting division. I am problem solver who specifically looks at sales and organizational problems that impact on company efficiency. Thus far I have worked with clients within industries such as financial services, FMCG's, alcohol and pharmaceutical companies. I am required to understand project management and be the project manager on every project I do. I am also required to analyze , research and develop strategic solutions for the clients I work with. As an analyst I am also responsible for ensuring projects run seamlessly and smoothly and that profitability of projects is managed from start to finish. I am also required to multi-task as I project manage and problem solve for multiple projects at a time. Additionally I am required to contribute to new business development for the business, and not only bring in clients but write proposals and be apart of pitching them. I have also ran a start up before this whilst simultaneously doing my studies which has aided me in developing the skills that are required of me in my current role",
          },
        ],

        extroversion: 4,
        agreeableness: 1,
        openness: 7,
        conscientiousness: 3,
        neuroticism: 0,

        videointerview: [
          {
            question: 'Why are manhole covers round?',
            video: 'https://www.youtube.com/watch?v=OVAMb6Kui6A',
          },
          {
            question: 'Why are manhole covers round?',
            video: 'https://www.youtube.com/watch?v=OVAMb6Kui6A',
          },
          {
            question: 'Why are manhole covers round?',
            video: 'https://www.youtube.com/watch?v=OVAMb6Kui6A',
          },
        ],
      },
      {
        id: 3,
        name: 'Aleksadner Surman',
        description: 'Inżynier ds. oprogramowania w NASK',
        avatar: './assets/avatars/avatar3.jpeg',

        summary: "Dismo Recruitment Solutions specializes in recruiting front-end and back-end developers, experts in the area of Data Science & Data Management as well as IT managers and project managers.",
        skills: [0, 0, 1, 2, 2, 1, 1, 0,],
        experience: [
          {
            role: 'Cheif Digital Officer',
            company: 'HelloCrowd',
            datefrom: 'Mar 2010',
            dateto: 'Current',
            memo: "Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life. Umami tattooed sriracha meggings pickled Marfa Blue Bottle High Life next level four loko PBR. Keytar pickled next level keffiyeh drinking vinegar street art. Art party vinyl Austin, retro whatever keytar mixtape. Pickled ethnic farm-to-table distillery ugh chia. Ethical Odd Future narwhal, mlkshk fap asymmetrical next level High Life literally cred blog. Banh mi swag art party, fashion axe you probably haven't heard of them stumptown tousled food truck post-ironic quinoa bicycle rights aesthetic keytar Pitchfork.",
          },
          {
            role: 'Business Unit Director',
            company: 'Penquin',
            datefrom: 'Jan 2003',
            dateto: 'Feb 2010',
            memo: "salvia kitsch before they sold out High Life. Umami tattooed sriracha meggings pickled Marfa Blue Bottle High Life next l",
          },
        ],
        education: [
          {
            school: 'University of Cape Town',
            degree: 'BCom LLB',
            yearfrom: 1997,
            yearto: 2003,
          },
          {
            school: 'St Johns College',
            degree: 'Unknown Degree',
            yearfrom: 1993,
            yearto: 1997,
          },
        ],

        questionanswer: [
          {
            question: 'Are you under the age of 25?',
            answer: 'Yes',
          },
          {
            question: 'Are you a South African citizen?',
            answer: 'Yes',
          },
          {
            question: 'Do you have more than three years’ full-time work experience after graduation?',
            answer: 'Yes',
          },
          {
            question: 'Please tell us about your work / volunteer experience?',
            answer: "I am currently a business Analyst at a global firm within the consulting division. I am problem solver who specifically looks at sales and organizational problems that impact on company efficiency. Thus far I have worked with clients within industries such as financial services, FMCG's, alcohol and pharmaceutical companies. I am required to understand project management and be the project manager on every project I do. I am also required to analyze , research and develop strategic solutions for the clients I work with. As an analyst I am also responsible for ensuring projects run seamlessly and smoothly and that profitability of projects is managed from start to finish. I am also required to multi-task as I project manage and problem solve for multiple projects at a time. Additionally I am required to contribute to new business development for the business, and not only bring in clients but write proposals and be apart of pitching them. I have also ran a start up before this whilst simultaneously doing my studies which has aided me in developing the skills that are required of me in my current role",
          },
        ],

        extroversion: 3,
        agreeableness: 3,
        openness: 1,
        conscientiousness: 5,
        neuroticism: 0,

        videointerview: [
          {
            question: 'Why are manhole covers round?',
            video: 'https://www.youtube.com/watch?v=OVAMb6Kui6A',
          },
          {
            question: 'Why are manhole covers round?',
            video: 'https://www.youtube.com/watch?v=OVAMb6Kui6A',
          },
          {
            question: 'Why are manhole covers round?',
            video: 'https://www.youtube.com/watch?v=OVAMb6Kui6A',
          },
        ],
      },
      {
        id: 4,
        name: 'Lech Alexander Murawski',
        description: 'Entrepreneur and Engineer',
        avatar: './assets/avatars/avatar4.jpeg',

        summary: "An energetic and proactive Head of Operations who can produce the desired effect with the minimum of effort, expense, or waste. Maxine can drive a business to increase profits by avoiding procrastination and acting instead of worrying. She is someone who consistently looks to identify how she can optimise efficiency and improve staff performance. In her current role she works closely with all teams and individuals across the company to develop and coordinate the execution of strategies that will lead to an increase in operational efficiency. One of her strongest points is her advanced knowledge of corporate policy, laws and regulatory requirements specific to her areas of responsibility. Aside from her leadership skills she is a true professional who champions company culture and employee engagement at every opportunity. Right now, she is looking for a position with a reputable company where she can build a long-term career.",
        skills: [1, 1, 1, 2, 2, 2, 1, 2,],
        experience: [
          {
            role: 'Cheif Digital Officer',
            company: 'HelloCrowd',
            datefrom: 'Mar 2010',
            dateto: 'Current',
            memo: "Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life. Umami tattooed sriracha meggings pickled Marfa Blue Bottle High Life next level four loko PBR. Keytar pickled next level keffiyeh drinking vinegar street art. Art party vinyl Austin, retro whatever keytar mixtape. Pickled ethnic farm-to-table distillery ugh chia. Ethical Odd Future narwhal, mlkshk fap asymmetrical next level High Life literally cred blog. Banh mi swag art party, fashion axe you probably haven't heard of them stumptown tousled food truck post-ironic quinoa bicycle rights aesthetic keytar Pitchfork.",
          },
          {
            role: 'Business Unit Director',
            company: 'Penquin',
            datefrom: 'Jan 2003',
            dateto: 'Feb 2010',
            memo: "salvia kitsch before they sold out High Life. Umami tattooed sriracha meggings pickled Marfa Blue Bottle High Life next l",
          },
        ],
        education: [
          {
            school: 'University of Cape Town',
            degree: 'BCom LLB',
            yearfrom: 1997,
            yearto: 2003,
          },
          {
            school: 'St Johns College',
            degree: 'Unknown Degree',
            yearfrom: 1993,
            yearto: 1997,
          },
        ],

        questionanswer: [
          {
            question: 'Are you under the age of 25?',
            answer: 'Yes',
          },
          {
            question: 'Are you a South African citizen?',
            answer: 'Yes',
          },
          {
            question: 'Do you have more than three years’ full-time work experience after graduation?',
            answer: 'Yes',
          },
          {
            question: 'Please tell us about your work / volunteer experience?',
            answer: "I am currently a business Analyst at a global firm within the consulting division. I am problem solver who specifically looks at sales and organizational problems that impact on company efficiency. Thus far I have worked with clients within industries such as financial services, FMCG's, alcohol and pharmaceutical companies. I am required to understand project management and be the project manager on every project I do. I am also required to analyze , research and develop strategic solutions for the clients I work with. As an analyst I am also responsible for ensuring projects run seamlessly and smoothly and that profitability of projects is managed from start to finish. I am also required to multi-task as I project manage and problem solve for multiple projects at a time. Additionally I am required to contribute to new business development for the business, and not only bring in clients but write proposals and be apart of pitching them. I have also ran a start up before this whilst simultaneously doing my studies which has aided me in developing the skills that are required of me in my current role",
          },
        ],

        extroversion: 7,
        agreeableness: 7,
        openness: 0,
        conscientiousness: 5,
        neuroticism: 3,

        videointerview: [
          {
            question: 'Why are manhole covers round?',
            video: 'https://www.youtube.com/watch?v=OVAMb6Kui6A',
          },
          {
            question: 'Why are manhole covers round?',
            video: 'https://www.youtube.com/watch?v=OVAMb6Kui6A',
          },
          {
            question: 'Why are manhole covers round?',
            video: 'https://www.youtube.com/watch?v=OVAMb6Kui6A',
          },
        ],
      },
    ];
  }

  getCandidates(): Observable<Candidate[]> {
    return of(this.candidates);
  }

  getCandidate(id: number | string) {
    return this.getCandidates().pipe(
      // (+) before `id` turns the string into a number
      map((candidates: Candidate[]) => this.candidates.find(candidate => candidate.id === +id))
    );
  }
}
