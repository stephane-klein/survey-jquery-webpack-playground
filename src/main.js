import $ from "jquery";
import * as Survey from "survey-jquery";
import "survey-jquery/survey.min.css";

document.addEventListener('DOMContentLoaded', (event) => {
    const modelData = {
        "title": "Formular",
        "pages": [
            {
                "title": "Step 1: Foobar",
                "questions": [
                    {
                        "type": "radiogroup",
                        "name": "question1",
                        "title": "Question title",
                        "choices": [
                            {
                                "value": "response1",
                                "text": "Response 1"
                            },
                            {
                                "value": "response2",
                                "text": "Response 2"
                            }
                        ]
                    }
                ]
            }
        ]
    };
    var surveyModel = new Survey.Model(modelData);

    $("#surveyContainer").Survey({
        model: surveyModel
    });
});
