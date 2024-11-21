import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { ObjectivesComponent } from './pages/objectives/objectives.component';
import { VgComponent } from './pages/vg/vg.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ImageSliderComponent } from './pages/image-slider/image-slider.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { AppsGamesComponent } from './pages/apps-games/apps-games.component';
import { GuessNumberComponent } from './pages/guess-number/guess-number.component';
import { WeatherApiComponent } from './pages/weather-api/weather-api.component';
import { HangmanComponent } from './pages/hangman/hangman.component';
import { RockpaperscissorsComponent } from './pages/rockpaperscissors/rockpaperscissors.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'apps-games', component: AppsGamesComponent},
    {path: 'home', component: HomeComponent},
    {path: 'calculator', component: CalculatorComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'education', component: EducationComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'guess-game', component: GuessNumberComponent},
    {path: 'hobbies', component: HobbiesComponent},
    {path: 'images', component: ImageSliderComponent},
    {path: 'objectives', component: ObjectivesComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'vg', component: VgComponent},
    {path: 'weather', component: WeatherApiComponent},
    {path: 'hangman', component: HangmanComponent},
    {path: 'rockpaperscissors', component: RockpaperscissorsComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
