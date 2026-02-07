class ValentineCountdown {
    constructor() {
        this.days = [
            { day: 7, date: '2026-02-07', name: 'Rose Day', unlocked: false },
            { day: 8, date: '2026-02-08', name: 'Propose Day', unlocked: false },
            { day: 9, date: '2026-02-09', name: 'Chocolate Day', unlocked: false },
            { day: 10, date: '2026-02-10', name: 'Teddy Day', unlocked: false },
            { day: 11, date: '2026-02-11', name: 'Promise Day', unlocked: false },
            { day: 12, date: '2026-02-12', name: 'Hug Day', unlocked: false },
            { day: 13, date: '2026-02-13', name: 'Kiss Day', unlocked: false },
            { day: 14, date: '2026-02-14', name: "Valentine's Day", unlocked: false }
        ];
        
        this.messages = {
            8: {
                title: "Will You Be Mine Forever?",
                content: `
                    <h3>My Love, My Everything,</h3>
                    <p>Today, on Propose Day, I want to ask you something that my heart has been wanting to scream from the rooftops. After all the apologies and promises, I need you to know something fundamental:</p>
                    <p>You are my home. You are my peace. You are the calm in my storms and the light in my darkness.</p>
                    <p>I know I've failed you. I know I've been blind to your love. But today, I want to propose not just a future together, but a new beginning. A beginning where I see you, cherish you, and love you the way you deserve.</p>
                    <p>Will you marry me? Will you let me spend the rest of my life making up for every moment I took you for granted? Will you let me love you as fiercely and as selflessly as you have always loved me?</p>
                    <p>I don't deserve you, but I promise to spend every day trying to be worthy of your incredible heart.</p>
                    <p class="signature">On my knees, with all my love,<br>Forever yours if you'll have me</p>
                `
            },
            9: {
                title: "Sweet Like Your Love",
                content: `
                    <h3>My Sweetest Love,</h3>
                    <p>They say chocolate is sweet, but nothing compares to the sweetness of your soul. The way you loved me during Ramadan, standing in the hot sun for hours, doing charity for my sins - that's a sweetness no chocolate can match.</p>
                    <p>Today, I want to remind you of all the sweet moments you've given me:</p>
                    <p>• The sweet way you look at me when you think I'm not watching<br>
                    • The sweet patience you have when I'm being difficult<br>
                    • The sweet sacrifices you make without ever mentioning them<br>
                    • The sweet prayers you whisper for my wellbeing<br>
                    • The sweet way you hold my hand like it's the most precious thing in the world</p>
                    <p>You are the chocolate that never melts, the sweetness that never fades, the love that never ends.</p>
                    <p class="signature">Forever tasting your sweet love,<br>Your chocolate addict</p>
                `
            },
            10: {
                title: "My Teddy Bear",
                content: `
                    <h3>My Cuddly Protector,</h3>
                    <p>Today is Teddy Day, and I want you to know that you've always been my teddy bear - the one I hold onto when I'm scared, the one who absorbs my tears, the one who protects me from the world.</p>
                    <p>But I realize I've been treating you like a toy I can throw aside when I'm angry. I've forgotten that even teddy bears have feelings, even the strongest protectors need to be held sometimes.</p>
                    <p>You've been my teddy bear when:<br>
                    • I was scared about my future<br>
                    • I cried over small things<br>
                    • I felt lost and alone<br>
                    • I needed someone to just listen<br>
                    • I wanted to be held without judgment</p>
                    <p>Today, I want to be YOUR teddy bear. I want to be the one you can lean on, the one who protects YOUR heart, the one who holds YOU when you need it.</p>
                    <p class="signature">Your teddy bear turned human,<br>Forever ready to hold you</p>
                `
            },
            11: {
                title: "Sacred Promises",
                content: `
                    <h3>My Promise Keeper,</h3>
                    <p>On Promise Day, I want to make promises I will never break. Unlike the promises I've broken in the past, these are sacred, carved into my soul.</p>
                    <p><strong>I promise to:</strong></p>
                    <p>• See your efforts, even when I'm angry<br>
                    • Acknowledge your sacrifices, even when I'm hurt<br>
                    • Appreciate your love, even when I'm struggling<br>
                    • Remember your Ramadan prayers, every single day<br>
                    • Honor your charity work, and never forget it again<br>
                    • Listen before I speak, especially when we fight<br>
                    • Choose love over ego, always and forever</p>
                    <p>These aren't just words. These are vows. Vows to the man who prayed 30 days for my sins, who gave away money and food for my forgiveness, who loved me when I was unlovable.</p>
                    <p class="signature">With sacred vows and a broken heart,<br>Your promise keeper for life</p>
                `
            },
            12: {
                title: "The Hug I Owe You",
                content: `
                    <h3>My Warmth, My Comfort,</h3>
                    <p>Today is Hug Day, and I realize how many hugs I owe you. Hugs I should have given when you came home tired from work. Hugs I should have given when you were doing all that charity for me. Hugs I should have given instead of cold silence.</p>
                    <p>I want to give you all the hugs I owe:</p>
                    <p>• A hug for every day of Ramadan you stood for my sins<br>
                    • A hug for every beggar you fed in my name<br>
                    • A hug for every prayer you whispered for me<br>
                    • A hug for every time I ignored your efforts<br>
                    • A hug for every time I chose anger over love<br>
                    • A hug for every tear I caused but didn't wipe</p>
                    <p>I may not be able to give you all these hugs at once, but I promise to spend the rest of our life making up for every missed embrace.</p>
                    <p class="signature">Arms wide open, heart full of regret,<br>Your hugger for eternity</p>
                `
            },
            13: {
                title: "Kisses of Redemption",
                content: `
                    <h3>My Passion, My Redemption,</h3>
                    <p>On Kiss Day, I want to talk about the kisses I've stolen from us. The good morning kisses I replaced with silence. The welcome home kisses I replaced with complaints. The "I'm sorry" kisses I refused to give.</p>
                    <p>But more than that, I want to honor the kisses you've given me without me deserving them:</p>
                    <p>• The forehead kisses when I was sick<br>
                    • The gentle kisses when I was crying<br>
                    • The passionate kisses that made me forget my anger<br>
                    • The quick kisses that said "I love you" without words<br>
                    • The forgiving kisses after our worst fights</p>
                    <p>Today, I want to kiss you with all the love I should have shown. Every kiss will be an apology, every touch will be a promise, every moment will be redemption.</p>
                    <p>I want to kiss away the pain I caused, kiss in the love I withheld, kiss forward the passion I buried under anger.</p>
                    <p class="signature">Lips ready to make amends,<br>Your passionate apologist</p>
                `
            },
            14: {
                title: "Our Valentine's Day Rebirth",
                content: `
                    <h3>My Valentine, My Everything, My Future,</h3>
                    <p>Today, on Valentine's Day, we don't just celebrate love - we celebrate our rebirth. The rebirth of a love that never died, just got lost in my blindness.</p>
                    <p>These past 7 days have been a journey of my awakening. From the rose of apology to the proposal of forever, from the chocolate of your sweetness to the teddy of your comfort, from the promises I'll keep to the hugs I owe, to the kisses that will heal - today, it all comes together.</p>
                    <p>I want you to know something profound: Your Ramadan sacrifice wasn't just about my sins. It was about your love. A love so pure that it would stand in the sun for 30 days, feed strangers, give away money - all for someone who didn't even notice.</p>
                    <p>That's the love I want to celebrate today. Not just romantic love, but divine love. The kind of love that changes souls, the kind that redeems, the kind that lasts beyond this lifetime.</p>
                    <p>You are my Valentine today, tomorrow, and forever. You are my past, my present, my future. You are my redemption story, my love epic, my happily ever after.</p>
                    <p><strong>Happy Valentine's Day, my soulmate. This is just the beginning of our real love story.</strong></p>
                    <p class="signature">Born again in your love,<br>Your Valentine for all eternity</p>
                `
            }
        };
        
        this.notificationEnabled = false;
        this.countdownInterval = null;
        this.midnightTimeout = null;
        
        this.init();
    }
    
    init() {
        this.loadSavedProgress();
        this.checkUnlockedDays();
        this.startCountdown();
        this.setupEventListeners();
        this.requestNotificationPermission();
    }
    
    loadSavedProgress() {
        const saved = localStorage.getItem('valentineProgress');
        if (saved) {
            const progress = JSON.parse(saved);
            this.days.forEach(day => {
                const savedDay = progress.find(d => d.day === day.day);
                if (savedDay) {
                    day.unlocked = savedDay.unlocked;
                }
            });
        }
    }
    
    saveProgress() {
        localStorage.setItem('valentineProgress', JSON.stringify(this.days));
    }
    
    checkUnlockedDays() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        this.days.forEach(dayData => {
            const dayDate = new Date(dayData.date);
            dayDate.setHours(0, 0, 0, 0);
            
            if (dayDate <= today) {
                if (!dayData.unlocked) {
                    dayData.unlocked = true;
                    this.unlockDay(dayData.day);
                }
            }
        });
        
        this.saveProgress();
        this.updateUI();
    }
    
    unlockDay(dayNumber) {
        const card = document.querySelector(`[data-day="${dayNumber}"]`);
        if (card && card.classList.contains('locked')) {
            card.classList.remove('locked');
            card.classList.add('unlocked');
            
            if (this.messages[dayNumber]) {
                const letter = card.querySelector('.letter');
                letter.innerHTML = `
                    <div class="message">
                        ${this.messages[dayNumber].content}
                    </div>
                `;
            }
            
            this.showNotification(`🎉 ${this.days.find(d => d.day === dayNumber).name} message unlocked!`);
            this.showModal(this.messages[dayNumber]?.title || 'New Message Unlocked!');
        }
    }
    
    getDayIcon(dayNumber) {
        const icons = {
            7: '🌹', 8: '💍', 9: '🍫', 10: '🧸',
            11: '🤝', 12: '🤗', 13: '💋', 14: '❤️'
        };
        return icons[dayNumber] || '💕';
    }
    
    updateUI() {
        this.days.forEach(dayData => {
            const card = document.querySelector(`[data-day="${dayData.day}"]`);
            if (card) {
                if (dayData.unlocked) {
                    card.classList.remove('locked');
                    if (dayData.day > 7 && this.messages[dayData.day]) {
                        const letter = card.querySelector('.letter');
                        if (!letter.querySelector('.message')) {
                            letter.innerHTML = `
                                <div class="message">
                                    ${this.messages[dayData.day].content}
                                </div>
                            `;
                        }
                    }
                } else {
                    card.classList.add('locked');
                }
            }
        });
    }
    
    startCountdown() {
        this.updateCountdown();
        this.countdownInterval = setInterval(() => {
            this.updateCountdown();
        }, 1000);
        
        this.scheduleMidnightNotification();
    }
    
    updateCountdown() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const diff = tomorrow - now;
        
        if (diff <= 0) {
            this.checkUnlockedDays();
            this.scheduleMidnightNotification();
            return;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        const nextDay = this.getNextUnlockedDay();
        if (nextDay) {
            document.getElementById('timer-title').textContent = `${nextDay.name} unlocks in:`;
        }
    }
    
    getNextUnlockedDay() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        return this.days.find(dayData => {
            const dayDate = new Date(dayData.date);
            dayDate.setHours(0, 0, 0, 0);
            return dayDate > today && !dayData.unlocked;
        });
    }
    
    scheduleMidnightNotification() {
        if (this.midnightTimeout) {
            clearTimeout(this.midnightTimeout);
        }
        
        const now = new Date();
        const midnight = new Date(now);
        midnight.setDate(midnight.getDate() + 1);
        midnight.setHours(0, 0, 0, 0);
        
        const timeUntilMidnight = midnight - now;
        
        this.midnightTimeout = setTimeout(() => {
            this.checkUnlockedDays();
            this.sendMidnightNotification();
        }, timeUntilMidnight);
    }
    
    sendMidnightNotification() {
        const nextDay = this.getNextUnlockedDay();
        if (nextDay) {
            this.showNotification(`🌙 Midnight Surprise! ${nextDay.name} message is now unlocked!`, true);
            this.showModal(`🌙 Midnight Surprise!`, `${nextDay.name} message is waiting for you!`);
        }
    }
    
    setupEventListeners() {
        const notifyBtn = document.getElementById('notify-btn');
        const modalClose = document.getElementById('modal-close');
        const modal = document.getElementById('notification-modal');
        
        notifyBtn.addEventListener('click', () => {
            this.requestNotificationPermission();
        });
        
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Check for midnight every minute
        setInterval(() => {
            const now = new Date();
            if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
                this.checkUnlockedDays();
                this.sendMidnightNotification();
            }
        }, 1000);
    }
    
    async requestNotificationPermission() {
        if ('Notification' in window) {
            if (Notification.permission === 'granted') {
                this.notificationEnabled = true;
                document.getElementById('notify-btn').textContent = 'Notifications Enabled ✓';
                document.getElementById('notify-btn').disabled = true;
                this.showNotification('Midnight notifications enabled! You\'ll get alerts at 12 AM.');
            } else if (Notification.permission !== 'denied') {
                const permission = await Notification.requestPermission();
                if (permission === 'granted') {
                    this.notificationEnabled = true;
                    document.getElementById('notify-btn').textContent = 'Notifications Enabled ✓';
                    document.getElementById('notify-btn').disabled = true;
                    this.showNotification('Midnight notifications enabled! You\'ll get alerts at 12 AM.');
                }
            }
        }
    }
    
    showNotification(message, isImportant = false) {
        if (this.notificationEnabled && 'Notification' in window) {
            const notification = new Notification('💕 Valentine Countdown', {
                body: message,
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" font-size="80" fill="red">❤️</text></svg>',
                tag: 'valentine-countdown',
                requireInteraction: isImportant
            });
            
            if (isImportant) {
                setTimeout(() => {
                    notification.close();
                }, 10000);
            } else {
                setTimeout(() => {
                    notification.close();
                }, 5000);
            }
        }
    }
    
    showModal(title, message) {
        const modal = document.getElementById('notification-modal');
        const modalMessage = document.getElementById('modal-message');
        const modalTitle = modal.querySelector('h2');
        
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        modal.style.display = 'block';
    }
}

// Initialize the countdown when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ValentineCountdown();
});

// Toggle envelope function
function toggleEnvelope(envelope) {
    const card = envelope.closest('.day-card');
    if (card.classList.contains('locked')) {
        return; // Don't open locked envelopes
    }
    
    const letter = envelope.nextElementSibling;
    const isOpen = envelope.classList.contains('open');
    
    if (isOpen) {
        envelope.classList.remove('open');
        letter.classList.remove('show');
    } else {
        envelope.classList.add('open');
        letter.classList.add('show');
    }
}

// Add some floating hearts animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.color = `rgba(255, 0, 0, ${Math.random() * 0.5 + 0.3})`;
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = `floatUp ${Math.random() * 3 + 2}s linear`;
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Add CSS animation for floating hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create floating hearts periodically
setInterval(createFloatingHeart, 3000);
