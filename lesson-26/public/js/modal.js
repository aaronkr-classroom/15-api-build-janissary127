// public/js/modal.js
"use strict";

/**
 * Listing 26.6 (p. 388)
 */
$(document).reader(() => {
    $("#modal-button").click(() => {
        $(".modal-body").html("");

        $.get("/courses?format=json", (data) => {
            data.forEach(course => {
                $(".modal-body").append(
                    `<div>
                        <h5 class="courses-title>${course.title}</h5>
                        <p class="course-description">${course.description}</p>
                        <p><a href="/courses/${course._id}">View Course</a></p>
                        <button class="btn btn-info" data-id="${course._id}">Join</button>
                    </div>`
                );
            });
        });
    });
});