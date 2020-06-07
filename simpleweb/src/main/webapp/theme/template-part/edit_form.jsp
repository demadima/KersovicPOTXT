<form method="post" action="" class="feedback__form">
<input type="hidden" value="${product.id}" name="id" />
    <div class="feedback__row">
            <div class="feedback__input">
                <label for="">
                    First name
                </label>
                <input required type="text" name="name" value="${product.name}" placeholder="Andrew">
            </div>
            <div class="feedback__input">
                <label for="">
                    Surname
                </label>
                <input required type="text" name="surname" value="${product.surname}"
                       placeholder="Smith">
            </div>
            <div class="feedback__input">
                <label for="">
                    Phone number
                </label>
                <input required type="tel" name="phone" value="${product.phone}"
                       placeholder="0638612504">
            </div>
            <div class="feedback__input">
                <label for="">
                    Gender
                </label>
                <input required type="text" name="sex" value="${product.sex}"
                       placeholder="-">
            </div>
            <div class="feedback__input">
                <label for="">
                    Age
                </label>
                <input required type="tel" name="age" value="${product.age}"
                       placeholder="21">
            </div>
    </div>
    <div class="form__bottom">
            <button type="submit" class="feedback__btn orange-btn">
                Update
            </button>
    </div>
</form>
