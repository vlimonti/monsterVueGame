new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
        },
        attack(especial) {
            this.hurt('playerLife', 7, 12, false)
            this.hurt('monsterLife', 5, 10, especial)
        },
        hurt(atributte, min, max, especial) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[atributte] = Math.max(this[atributte] - hurt, 0)
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false)
        },
        heal(min, max) {
            const health = this.getRandom(7, 12)
            this.playerLife = Math.min(this.playerLife + health, 100)
        }
    },
    watch: {

    }
})