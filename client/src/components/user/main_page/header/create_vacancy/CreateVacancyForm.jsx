import React from "react";
import classes from "./CreateVacancyForm.module.scss";
import Select from "react-select";
import FileBase64 from "react-file-base64";
import { Options } from '../../../../../assets/OptionsList'
import { withRouter } from 'react-router-dom'




class CreateVacancyForm extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      textAreaHeight: "auto",
      parentHeight: "auto",
      fileName: null,
      openedConfirmationMessage: false,
     
    }
    this.handlePosition = this.handlePosition.bind(this);
    this.handleCompanyName = this.handleCompanyName.bind(this)
    this.handleSallary = this.handleSallary.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleTerms = this.handleTerms.bind(this); 
    this.handleCategories = this.handleCategories.bind(this)
    this.handleTypesOfEmployment = this.handleTypesOfEmployment.bind(this)
    this.handleAnother = this.handleAnother.bind(this)
    this.inputRef = React.createRef();
    this.filenameRef = React.createRef(); 
  }

  componentDidUpdate() {
    let textAreaValue = "auto";
    if (this.state.textAreaHeight === textAreaValue) {
      this.setState({
        textAreaHeight: `${this.inputRef.current.scrollHeight}px`,
      });
    }
  }

  handlePosition = (event) => {
    let position = event.target.value;
    this.setState({ position });
  };

  handlePhone = (event) => {
    let phone = event.target.value;
    this.setState({ phone });
  };

  handleDescription = (event) => {
    let description = event.target.value;
    this.setState({ textAreaHeight: `auto` });
    this.setState({ parentHeight: `${this.inputRef.current.scrollHeight}px` });
    this.setState({ description });
  };

  handleCity = (city) => {
    console.log(city);
    this.setState({ city });
  };

  handleCompanyName = (event) => {
    let companyName = event.target.value;
    this.setState({ companyName });
  };

  handleSallary = (event) => {
    let sallary = event.target.value;
    this.setState({ sallary });
  };
  
  handleAddress = (event) => {
    let address = event.target.value;
    this.setState({ address });
  };

  handleCategories = (category) => {
    this.setState({ category });
  };
  handleTypesOfEmployment = (typeOfEmployment) => {
    this.setState({ typeOfEmployment });
  };
  handleAnother = (another) => {
    this.setState({ another });
  };

  handleTerms = (event) => {
      let terms = event.target.value
      this.setState({ terms })
  }

  handleImage = (image) => {
    let type = [];
    let check = () => {
      if (image[0].base64.substr(11, 15).match("jpeg")) {
        return type.push("jpeg");
      } else if (image[0].base64.substr(11, 15).match("png")) {
        return type.push("png");
      } else if (image[0].base64.substr(11, 15).match("gif")) {
        return type.push("gif");
      } else if (image[0].base64.substr(11, 15).match("jpg")) {
        return type.push("jpg");  
        }
    };

    
    check();
    let imageb64 = image[0].base64.replace(`data:image/${type};base64,`, "");
    this.setState({ imageb64 });
    this.setState({ fileName: image[0].name });
  };

  handleSubmit = async (event) => {
    event.preventDefault()
    const owner = JSON.parse(localStorage.getItem('userData'))
    let data = {
      position: this.state.position,
      companyName: this.state.companyName,
      sallary: this.state.sallary,
      address: this.state.address,
      phone: this.state.phone,
      description: this.state.description,
      cityLabel: this.state.city.label,
      cityValue: this.state.city.value,
      category: this.state.category.value,
      typeOfEmployment: this.state.typeOfEmployment.value,
      another: this.state.another.value,
      image: this.state.imageb64, 
      ownerName: owner.name, 
      ownerId: owner.id
    };

    this.props.createVacancy(data);
    this.props.history.push('/my/posted-jobs')
    this.props.history.go(0)
  }

  handleCloseMessage = () => {
    this.setState({openedConfirmationMessage: false}) 
  }

  handleFileName = () => {
   if (this.state.fileName === null) {
    this.setState({fileName: 'Загрузить логотип'})
   }
   return this.state.fileName
  }



  render() {
    
   const { cities, categories, typesOfEmployment, another } = Options()
   const goBackToVacancies = () => {
     this.props.history.push('/my/')
   }

    return (
   <form className={classes.form} onSubmit={this.handleSubmit}>
        <h5>Новое вакансия</h5>
        <div>
          <div className={classes.select}>
            <span>
            <Select
              value={this.state.city}
              onChange={this.handleCity}
              options={cities}
              placeholder="Выберите город..."
              ref={this.inputRef}
              className="validate"
            />
            </span>
            <span>

            <Select
              value={this.state.category}
              onChange={this.handleCategories}
              options={categories}
              placeholder="Выберите категорию..."
              ref={this.inputRef}
              className="validate"
            />
            </span>
              <span>
              <Select
              value={this.state.typeOfEmployment}
              onChange={this.handleTypesOfEmployment}
              options={typesOfEmployment}
              placeholder="Выберите тип занятости..."
              ref={this.inputRef}
              className="validate"
            />
              </span>
              <span>
              <Select
              value={this.state.another}
              onChange={this.handleAnother}
              options={another}
              placeholder="Другие фильтры..."
              ref={this.inputRef}
              className="validate"
            />
              </span>

              <span
              className="helper-text"
              data-error="Выберите город"
            ></span>
          </div> 
          

          <div className="input-field">
            <input
              id="position"
              name="position"
              type="text"
              className="validate"
              required
              ref={this.inputRef}
              onChange={this.handlePosition}
              autoComplete="off"
              placeholder="Позиция"
            />
            <span
              className="helper-text"
              data-error="Введите название должности"
            ></span>
          </div>

          <div className="input-field">
            <input
              name="text"
              type="text"
              className="validate"
              required
              min="1"
              placeholder="Заработная плата"
              ref={this.inputRef}
              onChange={this.handleSallary}
              autoComplete="off"
            />

            <span className="helper-text" data-error="Укажите заработную плату"></span>
          </div>
          <div className="input-field">
            <input
              id="phone"
              name="phone"
              type="tel"
              className="validate"
              autoComplete="off"
              placeholder="Контактный номер телефона"
              required
              min="5"
              ref={this.inputRef}
              onChange={this.handlePhone}
            />
            <span className="helper-text" data-error="Введите телефон"></span>
          </div>

          <div className="input-field">
            <input
              id="company_name"
              name="company_name"
              type="text"
              className="validate"
              autoComplete="off"
              placeholder="Название компании"
              required
              min="5"
              ref={this.inputRef}
              onChange={this.handleCompanyName}
            />
            <span className="helper-text" data-error="Введите название компании"></span>
          </div>
          <div className="input-field">
            <input
              id="address"
              name="address"
              type="text"
              className="validate"
              autoComplete="off"
              placeholder="Адрес компании"
              required
              min="5"
              ref={this.inputRef}
              onChange={this.handleAddress}
            />
            <span className="helper-text" data-error="Введите адрес компании"></span>
          </div>

         <div className="file-field input-field">
            <div className={classes.file}>
              <span className="btn btn-primary blue">Загрузить логотип</span>
              <FileBase64
                multiple={true}
                onDone={this.handleImage}
                type="file"
                value={"file"}
                accept="image/gif, image/jpg, image/jpeg, image/png"
              />
            </div>
            <div className="file-path-wrapper">
              <input 
                className="file-path validate"
                type="text"
                value={this.state.fileName}
              />
            </div> 
          </div>       
        <form class="col s12">
            <div className={classes.description} >
              <div style={{ minHeight: this.state.parentHeight }}>
                <textarea
                  wrap="hard"
                  rows={3}
                  ref={this.inputRef}
                  onChange={this.handleDescription}
                  id="textarea"
                  name="description"
                  type="text"
                  required
                  min="1"
                  autoComplete="off"
                  placeholder="Описание вакансии"
                  className="materialize-textarea"
                  style={{
                    height: this.state.textAreaHeight,
                  }}
                />
              </div>

              <span
                className="helper-text"
                data-error="Описание Вакансии"
              ></span>
            </div>
          </form>
          <div className={classes.btns}>
            <a href="/"
              className="btn btn-primary"
            >
              Назад
            </a> 

            <button
              type="submit"
              className="btn btn-primary green"
            > 
              Разместить вакансию
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(CreateVacancyForm)