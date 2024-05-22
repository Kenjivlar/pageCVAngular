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


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'calculator', component: CalculatorComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'education', component: EducationComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'hobbies', component: HobbiesComponent},
    {path: 'images', component: ImageSliderComponent},
    {path: 'objectives', component: ObjectivesComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'vg', component: VgComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
