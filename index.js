

import { runMonthlyGainerScraper } from './monthlygainer.js';
import { feedmonthly } from './feedmonthly.js';

import { getMonthlyLosers } from './monthlyloser.js';
import { feedmonthlyloser } from './feedmonthlyloser.js';


import {runmonthlyloss} from './prompt3.js';
import {runmonthlygain} from './prompt4.js';

import {getMonthlyLosersgroupb} from './monthlylosers_b.js';

import {runMonthlyGainerScraperGroupb} from './monthlygainer_b.js';

async function runAllTasksSequentially() {
  try {
    await runMonthlyGainerScraperGroupb();
    await runMonthlyGainerScraper();
    console.log('Monthly Gainer scraping completed!');

    await feedmonthly();
    console.log('Monthly Gainer feed completed!');
    
    await getMonthlyLosersgroupb()
    await getMonthlyLosers();
    console.log('Monthly Loser scraping completed!');

    await feedmonthlyloser();
    console.log('Monthly Loser feed completed!');


    await runmonthlyloss()
    console.log('Prompt completed!');

    await runmonthlygain()
    console.log('Prompt completed!');

    console.log(' All tasks executed sequentially!');
  } catch (err) {
    console.error(' Error during task execution:', err);
  }
}

runAllTasksSequentially();

