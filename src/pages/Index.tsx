import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [filter, setFilter] = useState('all');

  const services = [
    {
      icon: 'Palette',
      title: 'Брендинг',
      description: 'Создание уникального визуального стиля для вашего бренда'
    },
    {
      icon: 'Layout',
      title: 'UI/UX Дизайн',
      description: 'Проектирование интерфейсов с фокусом на пользовательский опыт'
    },
    {
      icon: 'Smartphone',
      title: 'Дизайн приложений',
      description: 'Разработка современных мобильных интерфейсов'
    },
    {
      icon: 'Package',
      title: 'Упаковка',
      description: 'Дизайн упаковки продуктов и визуальных материалов'
    }
  ];

  const portfolio = [
    {
      id: 1,
      title: 'Мобильное приложение',
      category: 'UI/UX',
      image: 'https://cdn.poehali.dev/projects/fa7b113d-5395-495d-8eae-ea6120f969bf/files/ce53044c-714f-45fb-90aa-87091597ef1d.jpg',
      tags: ['Mobile', 'App Design']
    },
    {
      id: 2,
      title: 'Брендинг компании',
      category: 'Branding',
      image: 'https://cdn.poehali.dev/projects/fa7b113d-5395-495d-8eae-ea6120f969bf/files/48e86cd1-3b2f-4d96-a5df-290d1fc4bc24.jpg',
      tags: ['Logo', 'Identity']
    },
    {
      id: 3,
      title: 'Веб-платформа',
      category: 'Web',
      image: 'https://cdn.poehali.dev/projects/fa7b113d-5395-495d-8eae-ea6120f969bf/files/b5d2f9dd-817a-4b46-9e00-becc7732667c.jpg',
      tags: ['Website', 'Dashboard']
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'CEO, TechStart',
      text: 'Работать с этим дизайнером — одно удовольствие. Проект выполнен точно в срок, результат превзошёл ожидания!',
      avatar: '👩‍💼'
    },
    {
      name: 'Максим Иванов',
      role: 'Основатель, Creative Agency',
      text: 'Профессиональный подход, внимание к деталям и креативные решения. Обязательно буду обращаться снова.',
      avatar: '👨‍💻'
    },
    {
      name: 'Елена Смирнова',
      role: 'Product Manager',
      text: 'Отличное понимание бизнес-задач. Дизайн не только красивый, но и функциональный.',
      avatar: '👩‍🎨'
    }
  ];

  const blog = [
    {
      title: '10 трендов дизайна 2024',
      date: '15 окт 2024',
      readTime: '5 мин',
      category: 'Тренды'
    },
    {
      title: 'Как создать эффективный UI',
      date: '10 окт 2024',
      readTime: '8 мин',
      category: 'UI/UX'
    },
    {
      title: 'Цветовая психология в брендинге',
      date: '5 окт 2024',
      readTime: '6 мин',
      category: 'Брендинг'
    }
  ];

  const filteredPortfolio = filter === 'all' 
    ? portfolio 
    : portfolio.filter(item => item.category.toLowerCase() === filter.toLowerCase());

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold">Designer</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">Обо мне</button>
              <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-sm hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('blog')} className="text-sm hover:text-primary transition-colors">Блог</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contact')} size="sm">Связаться</Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in-up">
            <Badge variant="secondary" className="mb-6">Доступен для проектов</Badge>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
              Дизайн, который<br />
              <span className="bg-gradient-blue bg-clip-text text-transparent">работает</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Создаю минималистичные и функциональные интерфейсы для брендов, которые ценят простоту и эффективность
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('portfolio')}>
                Смотреть работы
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Обо мне</h2>
            <div className="w-20 h-1 bg-gradient-blue mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <div className="aspect-square bg-gradient-to-br from-blue-400/20 to-blue-900/10 rounded-2xl flex items-center justify-center">
                <div className="text-9xl">👨‍🎨</div>
              </div>
            </div>
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl font-heading font-semibold">Привет! Я дизайнер с 8+ годами опыта</h3>
              <p className="text-muted-foreground leading-relaxed">
                Специализируюсь на создании чистых, интуитивных интерфейсов, которые помогают бизнесу расти. Мой подход основан на глубоком понимании пользователей и внимании к деталям.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Работал с компаниями от стартапов до крупных корпораций, создавая дизайн, который не только красиво выглядит, но и решает бизнес-задачи.
              </p>
              <div className="flex gap-4 pt-4">
                <div>
                  <div className="text-3xl font-heading font-bold bg-gradient-blue bg-clip-text text-transparent">150+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold bg-gradient-blue bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold bg-gradient-blue bg-clip-text text-transparent">8+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Услуги</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный спектр дизайнерских услуг для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-blue-600 transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={28} className="text-blue-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Портфолио</h2>
            <div className="w-20 h-1 bg-gradient-blue mx-auto mb-8"></div>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button 
                variant={filter === 'all' ? 'default' : 'outline'} 
                onClick={() => setFilter('all')}
                size="sm"
              >
                Все работы
              </Button>
              <Button 
                variant={filter === 'ui/ux' ? 'default' : 'outline'} 
                onClick={() => setFilter('ui/ux')}
                size="sm"
              >
                UI/UX
              </Button>
              <Button 
                variant={filter === 'branding' ? 'default' : 'outline'} 
                onClick={() => setFilter('branding')}
                size="sm"
              >
                Брендинг
              </Button>
              <Button 
                variant={filter === 'web' ? 'default' : 'outline'} 
                onClick={() => setFilter('web')}
                size="sm"
              >
                Веб
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, index) => (
              <Card key={item.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex gap-2 mb-3">
                    {item.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Отзывы</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Что говорят мои клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-heading font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Блог</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Делюсь знаниями и опытом в дизайне
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blog.map((post, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-4">{post.category}</Badge>
                  <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Контакты</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Готов обсудить ваш проект. Свяжитесь со мной удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@designer.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Telegram</h4>
                    <p className="text-muted-foreground">@designer</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="animate-scale-in">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea placeholder="Расскажите о вашем проекте..." rows={5} />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить сообщение
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Designer. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;