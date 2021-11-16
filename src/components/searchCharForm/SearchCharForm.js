import { useState } from "react";
import useMarvelService from "../../services/MarvelService";
import { Link } from 'react-router-dom';
import Error from '../error/Error';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './searchCharForm.sass';

const SearchCharForm = () => {
    const [char, setChar] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const {getCharacterByName, clearError, loading, error} = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = (char) => {
        clearError();

        getCharacterByName(char)
            .then(onCharLoaded);
    }

    const errorMessage = error ? <div className="char__search-critical-error"><Error/></div> : null;
    const results = char === null ? null : char === undefined ? 
                     <p className="char__search-error">The character was not found. Check the name and try again</p>
                    :
                    <div className="char__search-wrapper">
                    <p className="char__search-success">{`There is! Visit ${char.name} page?`}</p>
                    <button className="btn btn_gray"><Link to={`/characters/${char.id}`}>TO PAGE</Link></button>
                    </div>;
    return(
        <div className="char__search-form">
            <Formik 
                initialValues={{char_search: ''}}
                validationSchema={Yup.object({
                    char_search: Yup.string()
                                    .required('This field is required')
                })}
                onSubmit={(value) => {
                    updateChar(value.char_search);
                  }}
            >
                <Form>
                    <label htmlFor="char_search" className="char__search-label">Or find a character by name:</label>
                    <div className="char__search-wrapper">
                        <Field 
                            type="text" 
                            name="char_search"
                            placeholder="Enter name" />
                            <button 
                                className="btn" 
                                type="submit"
                                disabled={loading}>FIND</button>
                    </div>
                    <ErrorMessage 
                            className="char__search-error" 
                            name="char_search" 
                            component="div"/>
                </Form>
            </Formik>
            {results}
            {errorMessage}
        </div>
    )
}

export default SearchCharForm;