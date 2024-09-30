import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  stateOptions: any[] = [
    { label: 'اعلانات 8', value: 'ads' },
    { label: 'أخبار', value: 'news' },
  ];

  tasks: any[] = [
    { label: 'غير منجزة 8', value: 'complete' },
    { label: 'منجزة', value: 'uncomplete' },
  ];

  value: string = 'ads';
  selectedTask: string = 'complete';

  checked: boolean = true;

  titleCard: any[] = [
    {
      title: 'عدد الملفات الواردة',
      icon: 'pi-folder',
      number: '10,567',
      statics: '5%',
      color: 'purple-100',
    },
    {
      title: 'عدد البريد الاكتروني',
      icon: 'pi-envelope',
      number: '790',
      statics: '20%',
      color: 'green-100',
    },
    {
      title: 'عدد المهام',
      icon: 'pi-clipboard',
      number: '329',
      statics: '10%',
      color: 'blue-100',
    },
  ];

  products: any[] = [
    {
      code: '1222345',
      task: 'اسم المهمة',
      category: 'فئة المهمة',
      finallDate: '12/03/2024',
    },
    {
      code: '1222345',
      task: 'اسم المهمة',
      category: 'فئة المهمة',
      finallDate: '12/03/2024',
    },
    {
      code: '1222345',
      task: 'اسم المهمة',
      category: 'فئة المهمة',
      finallDate: '12/03/2024',
    },
    {
      code: '1222345',
      task: 'اسم المهمة',
      category: 'فئة المهمة',
      finallDate: '12/03/2024',
    },
    {
      code: '1222345',
      task: 'اسم المهمة',
      category: 'فئة المهمة',
      finallDate: '12/03/2024',
    },
    {
      code: '1222345',
      task: 'اسم المهمة',
      category: 'فئة المهمة',
      finallDate: '12/03/2024',
    },
    {
      code: '1222345',
      task: 'اسم المهمة',
      category: 'فئة المهمة',
      finallDate: '12/03/2024',
    },
    {
      code: '1222345',
      task: 'اسم المهمة',
      category: 'فئة المهمة',
      finallDate: '12/03/2024',
    },
  ];
}
