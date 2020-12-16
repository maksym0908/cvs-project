import React from 'react'
import { Options } from '../../../../../assets/OptionsList'
import classes from './CitiesBlock.module.scss'
import kiev from '../../../../../assets/regions_icons/киев.png'
import dnepr from '../../../../../assets/regions_icons/днепр.png'
import zap from '../../../../../assets/regions_icons/запорожье.png'
import lvov from '../../../../../assets/regions_icons/львов.png'
import odessa from '../../../../../assets/regions_icons/одесса.jpg'
import harkov from '../../../../../assets/regions_icons/харьков.png'
import { Left } from '../../../../../assets/svgs/Svgs'


export const CitiesBlock = props => {
    const { cities } = Options()
    const lettersList = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Э", "Ю", "Я"]
    const city = cities.map(v => v)
    const vacancies = props.vacancies.map(v => v.cityLabel)
    const li = document.getElementsByTagName("li")
    const getLength = city => {
        return vacancies.filter(v => v === city).length
    }

    const removeEmptyLi = () => {
        for (let i = 0; i < li.length; i++) {
            if (!li[i].textContent.length) {
                li[i].remove()
            }
        }

    }





    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
            <span className={classes.link}><a href="/vacancies"><Left />Найти вакансии</a></span>
            <h4 className={classes.text}><b>Поиск вакансий по городам</b></h4>
                <div className={classes.bigCities}>
                    <span>
                        <a href="/vacancies/?city=kiev&by-city=1&page=1" className={classes.image}>
                            <img src={kiev} alt="kiev" />
               <p>Киев</p>
                </a>
                <span className={classes.length}>{getLength('Киев')}</span> 
                    </span>
                    <span>
                        <a href="/vacancies/?city=dnepr&by-city=1&page=1" className={classes.image}>
                            <img src={dnepr} alt="dnepr" />
               <p>Днепр</p> 
                </a>
                <span className={classes.length}>{getLength('Днепр')}</span>
                    </span>
                    <span>
                        <a href="/vacancies/?city=zaporozhye&by-city=1&page=1" className={classes.image}>
                            <img src={zap} alt="zaporozhye" />
               <p>Запорожье</p> 
                </a>
                <span className={classes.length}>{getLength('Запорожье')}</span>
                    </span>
                    <span>
                        <a href="/vacancies/?city=lvov&by-city=1&page=1" className={classes.image}>
                            <img src={lvov} alt="lvov" />
               <p>Львов</p> 
                </a>
                <span className={classes.length}>{getLength('Львов')}</span>
                    </span>
                    <span>
                        <a href="/vacancies/?city=odessa&by-city=1&page=1" className={classes.image}>
                            <img src={odessa} alt="odessa" />
               <p>Одесса</p> 
                </a>
                <span className={classes.length}>{getLength('Одесса')}</span>
                    </span>
                    <span>
                        <a href="/vacancies/?city=kharkov&by-city=1&page=1" className={classes.image}>
                            <img src={harkov} alt="kharkov" />
               <p>Харьков</p> 
                </a>
                <span className={classes.length}>{getLength('Харьков')}</span>
                    </span>
                </div>
                {lettersList.map(l => (
                    <ul>
                        <h5>{l}</h5>
                        {city.map(c =>
                            <li>
                                <a href={`/vacancies${c.value ? "/?city=" + c.value + "&by-city=1&page=1" : " "}`}>
                                    {[c.label].filter(v => v[0] === l[0])}
                                </a>
                                <span>
                                    {!vacancies.filter(v => v === c.label).length ?
                                        removeEmptyLi() : vacancies.filter(v => v === c.label).length
                                    }
                                </span>
                            </li>)
                        }
                    </ul>
                )
                )}
            </div>
        </div>
    )
}