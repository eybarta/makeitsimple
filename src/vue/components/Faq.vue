<template>
<div class="faq-block center" id="faq">
            <h2>Frequently Asked Questions</h2>

            <div class="faq-control">
                <h5>Make It Simple</h5>
                <div class="qa">
                    <ul>
                        <li @mousedown="selfclick(1)">
                            <label for="_1">
                                <input ref="radio-1" id="_1" type="radio" name="faq_group" checked hidden>
                                <div>
                                    <i class="plus"></i>
                                    <h6>How exactly are you simple?</h6>
                                    <div class="answer">Our simplicity starts at our core, even with the name of the company itself - MIS (Make It Simple)
All of our efforts within the company focus on this mission: To simplify the process of producing our products – without compromising the final quality of course. To simplify the way in which you receive our products. To simplify the service you receive. To simplify logistical and procedural processes. To simplify the way relevant information is delivered. To simplify the cost in a way that fits every customer. And more…</div>
                                </div>
                            </label>
                        </li>
                        <li @mousedown="selfclick(2)">
                            <label for="_2">
                                <input ref="radio-2" id="_2" type="radio" name="faq_group" hidden>
                                <div>
                                    <i class="plus"></i>
                                    <h6>How do I know that you will make things simple for me?</h6>
                                    <div class="answer">We put great effort and concern into what we can accomplish together in order to improve the simplicity of your work – so that in the end, this will be represented by the time you will be able to commit to the real thing – which is treating the maximum number of patients with minimum trivial and menial tasks.</div>
                                </div>
                            </label>
                        </li>
                        <li @mousedown="selfclick(3)">
                             <label for="_3">
                                <input ref="radio-3" id="_3" type="radio" name="faq_group" hidden>
                                <div>
                                    <i class="plus"></i>
                                    <h6>How do you make your products simple to use?</h6>
                                    <div class="answer">At MIS, simplicity means getting all the tools you need to perform the implant placement with ease. With the Seven implant, for example, you will receive a final drill (for a simpler, clearer procedure) and a cover screw.</div>
                                </div>
                            </label>

                        </li>
                        <li @mousedown="selfclick(4)">
                             <label for="_4">
                                <input ref="radio-4" id="_4" type="radio" name="faq_group" hidden>
                                 <div>
                                        <i class="plus"></i>
                                        <h6>How do you make things simple for my surgical team?</h6>
                                        <div class="answer">Support for you and your surgical team is a key priority for MIS. And here as well, the key is to make it simple. This is why your MIS sales rep is there for the dentist during surgery, both physically if necessary, on call or on line to guide and support you at every step in the process. In addition, there is a world of supporting information about all of our products and procedures in the form of online publications, instructions for use and maintenance as well as printed materials you will receive with each product or kit.</div>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    methods: {
        selfclick(num) {
            var radio = this.$refs[`radio-${num}`];
            if (!!radio && !!radio.checked) {
                setTimeout(function() {
                    radio.checked = false;
                }, 150)
            }
        }
    }
}
</script>
<style lang='stylus'>
</style>