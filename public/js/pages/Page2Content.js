export default
`<div class="center" data-field="total">
  <span class="label">اجمالي المبلغ بدون ضريبة</span>
  <div class="total-commission fixed">
    <span class="value">0</span>
    <span>ريال</span>
  </div>
</div>
<br />
<div class="center" data-field="is-first-team">
  <div class="toggle">
    <div class="option" data-value="false">لسنا التيم الاول ):</div>
    <div class="option selected" data-value="true">التيم الاول</div>
  </div>
</div>
<br />
<div class="btn-group">
  <div class="field" data-field="convertion-ratio">
    <div class="label">نسبة الكونفيرجن؟</div>
    <div class="input-area">
      <input type="number" min="0" max="100" />
      <span style="font-size:2.5em;font-weight:700">%</span>
    </div>
  </div>
  <div class="field" data-field="stc-clients">
    <div class="label">عدد عملاء STC</div>
    <div class="input-area">
      <input type="number" min="0" max="100" step="1" />
    </div>
  </div>
</div>
<br />
<span class="label"
  >تحقيق الاسابيع انقر على الاسابيع المختارة
  <span style="color: #c30000">(بدون الضريبة)</span></span
>
<div class="btn-group fit-height">
  <div class="field double-face" data-field="week1">
    <div class="front">الأسبوع الاول</div>
    <div class="back">
      <div class="label">الاسبوع الاول</div>
      <div class="input-area">
        <input type="number" />
        <span>ريال</span>
      </div>
    </div>
  </div>
  <div class="field double-face" data-field="week2">
  <div class="front">الأسبوع الثاني</div>
    <div class="back">
      <div class="label">الاسبوع الثاني</div>
      <div class="input-area">
        <input type="number" />
        <span>ريال</span>
      </div>
    </div>
  </div>
</div>
<div class="btn-group fit-height">
  <div class="field double-face" data-field="week3">
    <div class="front">الأسبوع الثالث</div>
    <div class="back">
      <div class="label">الاسبوع الثالث</div>
      <div class="input-area">
        <input type="number" />
        <span>ريال</span>
      </div>
    </div>
  </div>
  <div class="field double-face" data-field="week4">
    <div class="front">الأسبوع الرابع</div>
    <div class="back">
      <div class="label">الاسبوع الرابع</div>
      <div class="input-area">
        <input type="number" />
        <span>ريال</span>
      </div>
    </div>
  </div>
</div>
<span class="label error weeks-error" hidden>يجب ان يتطابق مجموع الاسابيع مع اجمالي المبلغ بدون ضريبة</span>
<br />
<div class="btn-group">
  <button class="prev">للخلف</button>
  <button class="next">النتيجة</button>
</div>`;