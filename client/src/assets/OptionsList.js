export const Options = () => {

 const cities =  [
        {label: 'Вся Украина'},
        { value: 'vinnitsa', label: 'Винница' },
        { value: 'dnepropetrovsk', label: 'Днепропетровск' },
        { value: 'donetsk', label: 'Донецк' },
        { value: 'zhytomyr', label: 'Житомир' },
        { value: 'zaporozhye', label: 'Запорожье' },
        { value: 'ivano-frankovsk', label: 'Ивано-Франковск' },
        { value: 'kiev', label: 'Киев' },
        { value: 'Kirovograd', label: 'Кировоград' },
        { value: 'lugansk', label: 'Луганск' },
        { value: 'lutsk', label: 'Луцк' },
        { value: 'lvov', label: 'Львов' },
        { value: 'nikolaev', label: 'Николаев' },
        { value: 'odessa', label: 'Одесса' },
        { value: 'poltava', label: 'Полтава' },
        { value: 'rovno', label: 'Ровно' },
        { value: 'sumy', label: 'Сумы' },
        { value: 'ternopol', label: 'Тернополь' },
        { value: 'uzhgorod', label: 'Ужгород' },
        { value: 'kharkov', label: 'Харьков' },
        { value: 'kherson', label: 'Херсон' },
        { value: 'khmelnitskiy', label: 'Хмельницкий' },
        { value: 'cherkassy', label: 'Черкассы' },
        { value: 'chernihov ', label: 'Чернигов' },
        { value: 'chernovtsy', label: 'Черновцы' },
        
      ]
    const categories = [
        { value: 'sales', label: 'Продажи, закупки', checked: false },
        { value: 'retail', label: 'Розничная торговля', checked: false },
        { value: 'marketing-advertising-pr', label: 'Маркетинг, реклама, PR' },
        { value: 'it', label: 'IT, компьютеры, интернет' },
        { value: 'logistic-supply-chain', label: 'Логистика, склад, ВЭД' },
        { value: 'office-secretarial', label: 'Секретариат, делопроизводство, АХО' },
        { value: 'administration', label: 'Администрация, руководство среднего звена' },
        { value: 'auto-transport', label: 'Транспорт, автобизнес' },
        { value: 'hr-recruitment', label: 'Управление персоналом, HR' },
        { value: 'real-estate', label: 'Недвижимость' },
        { value: 'banking-finance', label: 'Финансы, банк' },
        { value: 'telecommunications', label: 'Телекоммуникация и связь' },
        { value: 'construction-architecture', label: 'Строительство, архитектура' },
        { value: 'hotel-restaurant-tourism', label: 'Гостинично-ресторанный бизнес, туризм' },
        { value: 'accounting', label: 'Бухгалтерия, аудит' },
        { value: 'healthcare', label: 'Медицина, фармацевтика' },
        { value: 'publishing-media', label: 'СМИ, издательство, полиграфия' },
        { value: 'production-engineering', label: 'Рабочие специальности, производство' },
        { value: 'customer-service', label: 'Сфера обслуживания' },
        { value: 'legal', label: 'Юриспруденция' },
        { value: 'agriculture', label: 'Сельское хозяйство, агробизнес' },
        { value: 'education-scientific', label: 'Образование, наука' },
        { value: 'beaty-sports', label: 'Красота, фитнес, спорт' },
        { value: 'design-art', label: 'Дизайн, творчество' },
        { value: 'management-executive', label: 'Топ-менеджемент, руководство высшего звена' },
        { value: 'security', label: 'Охрана, безопасность' },
        { value: 'culture-music-showbiz', label: 'Культура, музыка, шоу-бизнес' },
        { value: 'insurance', label: 'Страхование' }
    ]
    const typesOfEmployment = [
        { value: 'full-employment', label: 'Полная занятость' },
        { value: 'underemplyment', label: 'Неполная занятость' },
        { value: 'remote-work', label: 'Удаленная работа' }
    ]

    const another = [
        { value: 'no-experience', label: 'Без опыта' },
        { value: 'student', label: 'Студентам' },
        { value: 'disability', label: 'Людям с инвалидностью' },
        { value: 'no-resume', label: 'Отклик без резюме' }
    ]

    return { cities, categories, typesOfEmployment, another }
}

